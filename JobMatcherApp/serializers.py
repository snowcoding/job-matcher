from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'first_name', 'last_name', 'is_staff', 'is_seeker', 'is_employer']
        extra_kwargs = {
            'password': {'write_only': True},
            'is_staff': {'read_only': True},
        }


class SignupMixin:
    def to_representation(self, instance):
        refresh = RefreshToken.for_user(instance)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

    def create(self, validated_data):
        raise NotImplementedError


class SignupSerializer(SignupMixin, UserSerializer):
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
