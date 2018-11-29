from rest_framework import serializers

from JobMatcherApp.serializers import ProfileSerializer
from billing.models import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    """Serializer used for representing Transaction after user events."""

    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = Transaction
        fields = ('id', 'profile', 'amount')

    def create(self, validated_data):
        profile_id = self.context['request'].user.profile.id
        return Transaction.objects.create(profile_id=profile_id, **validated_data)
