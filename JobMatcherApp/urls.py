from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),

    # JWT: Signin using email and password
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # JWT: Refresh the tokens as they are supposed to expire
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
