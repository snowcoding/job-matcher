from .models import User, Employer, Seeker
from django.core.exceptions import ValidationError
from django.db import IntegrityError

# This handles the viewing of the DRF
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings

# Import UserSerializer from the local serializer file
# import {UserSerializer} from './serializer
from .serializer import (UserSerializer, EmployerSerializer, SeekerSerializer)


# Create your views here.
# class Modal extends React.Component {
#   static propTypes = {}
# }

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    Http_method_names = ['get', 'post', 'put', 'delete', 'patch']

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = EmployerSerializer
    Http_method_names = ['get', 'post', 'put', 'delete', 'patch']

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = SeekerSerializer
    Http_method_names = ['get', 'post', 'put', 'delete', 'patch']


# @TODO  
class SignUpView(APIView):

    authentication_classes = []
    permission_classes = []

    def generate_token(self, user):
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        return token

    def post(self, request, format=None):

        # print(request.data)
        
        is_seeker = request.data.get('is_seeker', None)
        email = request.data.get('email', None)
        first_name = request.data.get('first_name', None)
        last_name = request.data.get('last_name', None)
        password = request.data.get('password', None)

        # Remove is_seeker because it's not part of the User Model
        if request.data.get('is_seeker') is not None:
            request.data.pop('is_seeker')
        
        # initializing serialized_user
        serialized_user = None 
        token = None

        # Check all fields for existence  
        if is_seeker is not None and email is not None and first_name is not None and last_name is not None and password is not None:
            
            # Check is_seeker boolean to decide which type of user to create 
            try:
                if is_seeker:
                    user = Seeker.objects.create_user(**request.data)
                    token = self.generate_token(user)
                    serialized_user = SeekerSerializer(user)
                else:
                    user = Employer.objects.create_user(**request.data)
                    token = self.generate_token(user)
                    serialized_user = EmployerSerializer(user)
            
            # If email is already taken, catch the Integrity Error
            except IntegrityError as e:
                return Response({'error':str(e)}, 400)

        # If serialized_user is still none, that means the request was missing some fields
        if serialized_user is None:
            return Response({'error':'malformed request, please make sure all required fields are included'}, 400)
        else:
            return Response({'message':'Signed up Successfully', 'data':serialized_user.data, 'token': token})
        