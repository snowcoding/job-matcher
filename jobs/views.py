from rest_framework import viewsets, mixins

from .models import Job
from . import serializers


class JobViewSet(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.ListModelMixin, mixins.CreateModelMixin,
                 viewsets.GenericViewSet):
    serializer_class = serializers.JobSerializer
    queryset = Job.objects.all()