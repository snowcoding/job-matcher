from rest_framework import viewsets, mixins
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from jobs.models import Job
from . import serializers


class JobViewSet(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.ListModelMixin, mixins.CreateModelMixin,
                 mixins.DestroyModelMixin, viewsets.GenericViewSet):
    serializer_class = serializers.JobSerializer

    # TODO create this permission class
    # Added for extra permission class to make sure the caller is an employer
    permission_classes = [IsAuthenticated]

    # Defined once at the time of the class def without access to the request queryset = Job.objects.all()
    # The opposite
    def get_queryset(self):
        if self.request.user.is_employer:
            return self.request.user.employer.jobs.all()
        else:
            return Job.objects.all()

    @action(methods=['get'], detail=False)
    def random(self, request):
        # TODO filter out from match DB
        employer = self.get_queryset().order_by("?").first()
        serializer = self.get_serializer(instance=employer)
        return Response(data=serializer.data)


class MatchViewSet(mixins.UpdateModelMixin, mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = serializers.MatchSerializer

    def get_queryset(self):
        if self.request.user.is_employer:
            return self.request.user.employer.matches.all()
        else:
            return self.request.user.seeker.matches.all()
