from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from . import serializers


@api_view(http_method_names=['GET'])
def me(request):
    """Returns representation of the authenticated user making the request."""
    serializer = serializers.UserSerializer(instance=request.user)
    return Response(data=serializer.data)


@api_view(http_method_names=['POST'])
@permission_classes([])
def signup(request):
    """Signs up a user and returns an access and refresh JSON web token pair"""
    serializer = serializers.SignupSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(data=serializer.data)
