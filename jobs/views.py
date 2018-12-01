from django.db.models import Q
from rest_framework import viewsets, mixins
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from jobs.models import Job, Match
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
            profile = self.request.user.employer

        else:
            profile = self.request.user.seeker

        # employer.matches automcatically gives only his matches and no other employer
        # employer_action = SUPER or
        # seeker_action = SUPER or
        # employer_action = CALL and seeker_action = APPLY

        # filter takes two kinds of arg, kwargs or combination of Q (query) objects, the Q allow for & | !
        qs = profile.matches.filter(
            Q(employer_action=Match.SUPER)
            | Q(seeker_action=Match.SUPER)
            | Q(employer_action=Match.CALL, seeker_action=Match.APPLY))

        # Further filter out  the is archived:
        if self.request.user.is_employer:
            # return qs.filter(is_archived_employer=False)
            return qs.exclude(is_archived_employer=True)

        else:
            # return qs.filter(is_archived_seeker=False)
            return qs.exclude(is_archived_seeker=True)
