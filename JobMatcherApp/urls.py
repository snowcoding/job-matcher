from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views

router = DefaultRouter(trailing_slash=True)
router.register('seekers', views.SeekerViewSet, base_name='seeker')
router.register('employers', views.EmployerViewSet, base_name='employer')

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),

    # JWT: Signin using email and password
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # JWT: Refresh the tokens as they are supposed to expire
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Signup and profile info
    path('signup/', views.signup, name='signup'),
    path('me/', views.me, name='me'),

    # view sets
    path('', include(router.urls)),
]
