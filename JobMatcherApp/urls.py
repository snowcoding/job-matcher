from django.urls import path, include

# import Router from 'express'
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token

from .views import UserViewSet, SignUpView

# routes = Router()
router = routers.DefaultRouter() # SimpleRouter

# routes.get('', handler)
# routes.post('', handler)
# routes.put('', handler)
# routes.delete('', handler)
# All methods that are defined in the Http_method_names list of UserViewSet
router.register('users', UserViewSet)

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('signup', SignUpView.as_view()),
    path('signin', obtain_jwt_token)
]

urlpatterns += router.urls