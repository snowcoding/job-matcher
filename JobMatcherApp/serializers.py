from django.db import transaction
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User, Seeker, Employer


class UserSerializer(serializers.ModelSerializer):
    """ModelSerializer to create auth users."""

    class Meta:
        model = User
        fields = ['email', 'password', 'first_name', 'last_name', 'is_staff', 'is_seeker', 'is_employer']
        extra_kwargs = {
            'password': {'write_only': True},
            'is_staff': {'read_only': True},
        }

    def create(self, validated_data):
        """Creates new auth user object using UserManager."""
        return User.objects.create_user(**validated_data)


class ProfileSerializer(serializers.Serializer):
    """
    Serializer to be subclassed by Seeker and Employer serializers.

    It allows creating and updating profiles and their related users.
    """

    email = serializers.EmailField(source='user.email', max_length=255,
                                   validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(source='user.password', max_length=128, write_only=True)
    first_name = serializers.CharField(source='user.first_name', allow_blank=True, max_length=30, required=False)
    last_name = serializers.CharField(source='user.last_name', allow_blank=True, max_length=150, required=False)
    is_seeker = serializers.BooleanField(source='user.is_seeker', required=False)
    is_employer = serializers.BooleanField(source='user.is_employer', required=False)

    class Meta:
        fields = ['email', 'password', 'first_name', 'last_name', 'is_seeker', 'is_employer']

    def validate(self, attrs):
        """
        Makes sure either of `is_employer` or `is_seeker` are passed when signing up.
        """
        user_data = attrs.get('user', {})
        is_seeker = user_data.get('is_seeker', False)
        is_employer = user_data.get('is_employer', False)

        if not any([is_seeker, is_employer]) or is_seeker == is_employer:
            raise serializers.ValidationError('must pass either `is_employer` or `is_seeker` and not both')

        return attrs

    @transaction.atomic
    def create(self, validated_data):
        """
        Creates new Profile (Seeker or Employer) and the auth User model.
        """
        # Create auth user model first
        user_data = validated_data.pop('user', {})
        user = User.objects.create_user(**user_data)
        # Creat respective profile
        if user.is_seeker:
            return Seeker.objects.create(user=user, **validated_data)
        else:
            return Employer.objects.create(user=user, **validated_data)

    @transaction.atomic
    def update(self, instance, validated_data):
        """
        Updates existing Profile (Seeker or Employer) and the auth User model.
        """
        # Update auth user model first
        user_data = validated_data.pop('user', {})
        user_serializer = UserSerializer(instance=instance.user, data=user_data)
        user_serializer.is_valid(raise_exception=True)
        user_serializer.save()
        # Update profile by calling super as ModelSerializer can handle updating its instances
        return super().save()


class SignupMixin:
    """Returns JWT access and refresh tokens instead of profile fields"""

    def to_representation(self, instance):
        refresh = RefreshToken.for_user(instance.user)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }


class SeekerSerializer(ProfileSerializer, serializers.ModelSerializer):
    """Default representation for Seeker objects"""

    class Meta:
        model = Seeker
        fields = ['id', *ProfileSerializer.Meta.fields, 'desired_title', 'top_skills', 'extra_skills', 'other_skills']


class SignupSeekerSerializer(SignupMixin, SeekerSerializer):
    """Serializer to be used for representing Seeker after signup."""
    pass


class EmployerSerializer(ProfileSerializer, serializers.ModelSerializer):
    """Default representation for Employer objects"""

    class Meta:
        model = Employer
        fields = ['id', *ProfileSerializer.Meta.fields, 'company_name']


class SignupEmployerSerializer(SignupMixin, SeekerSerializer):
    """Serializer to be used for representing Employer after signup."""
    pass
