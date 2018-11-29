import stripe
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

stripe.api_key = settings.STRIPE_SECRET_KEY

from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated

from .models import Transaction
from . import serializers


@api_view(http_method_names=['POST'])
@permission_classes([])
def charge(request):
    status = stripe.Charge.create(
        amount=500,
        currency='usd',
        description='A test charge from Django',
        source=request.data['token']
        #     get profile
    )

    # if status is ok
    #     send 50 credits to specified user
    #
    # if status not ok
    #     send error

    return Response(data=status)


class TransactionViewSet(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.ListModelMixin,
                         mixins.CreateModelMixin,
                         mixins.DestroyModelMixin, viewsets.GenericViewSet):
    serializer_class = serializers.TransactionSerializer

    permission_classes = [IsAuthenticated]  # DRF custom perm class]

    # Defined once at the time of the class def without access to the request
    queryset = Transaction.objects.all()

    # The opposite
    def get_queryset(self):
        return self.request.user.profile.transactions.all()
