import stripe
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

stripe.api_key = settings.STRIPE_SECRET_KEY


@api_view(http_method_names=['POST'])
@permission_classes([])
def charge(request):
    status = stripe.Charge.create(
        amount=500,
        currency='usd',
        description='A test charge from Django',
        source=request.data['token']
    )

    return Response(data=status)
