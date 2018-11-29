from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated

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
        return self.request.user.employer.jobs.all()


class MatchViewSet(mixins.UpdateModelMixin, mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = serializers.MatchSerializer

    def get_queryset(self):
        if self.request.user.is_employer:
            return self.request.user.employer.matches.all()
        else:
            return self.request.user.seeker.matches.all()
