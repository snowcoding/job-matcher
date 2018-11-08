from rest_framework import serializers
from .models import User, Employer, Seeker

#It will go to the User Model
#Get the username, email, is_staff
# this is the JSONStringify()
# converts JSON to python data types
# class UserSerializer extends serializers.Modelserializer {}
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ('username', 'email', 'is_staff')
        fields = '__all__'

class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        # fields = ('username', 'email', 'is_staff')
        fields = '__all__'

class SeekerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seeker
        # fields = ('username', 'email', 'is_staff')
        fields = '__all__'

