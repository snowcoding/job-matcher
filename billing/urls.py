from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter(trailing_slash=True)
router.register('transactions', views.TransactionViewSet, base_name='transaction')


urlpatterns = [
    # Billing
    path('charge/', views.charge, name='charge'),

    # view sets
    path('', include(router.urls))
]
