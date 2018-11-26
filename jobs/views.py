from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated

from .models import Job
from . import serializers


class JobViewSet(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.ListModelMixin, mixins.CreateModelMixin,
                 mixins.DestroyModelMixin, viewsets.GenericViewSet):
    serializer_class = serializers.JobSerializer

    permission_classes = [IsAuthenticated] #DRF custom perm class]

    # Defined once at the time of the class def without access to the request
    queryset = Job.objects.all()

    # The opposite
    def get_queryset(self):
        return self.request.user.employer.jobs.all()
