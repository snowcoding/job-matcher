from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

from JobMatcherApp.serializers import EmployerSerializer, SeekerSerializer
from jobs.models import Job, Match


class JobSerializer(serializers.ModelSerializer):
    """Serializer used for representing Job after signup."""

    employer = EmployerSerializer(read_only=True)

    class Meta:
        model = Job
        fields = ('id', 'employer', 'title', 'salary_min', 'salary_max', 'top_skills', 'extra_skills',
                  'familiar_with', 'description', 'requirements', 'is_active')

    def create(self, validated_data):
        employer_id = self.context['request'].user.employer.id
        return Job.objects.create(employer_id=employer_id, **validated_data)


class MatchSerializer(serializers.ModelSerializer):
    employer = EmployerSerializer(read_only=True)
    seeker = SeekerSerializer(read_only=True)
    job = JobSerializer(read_only=True)
    job_id = serializers.CharField(max_length=10)
    seeker_id = serializers.CharField(max_length=10)
    employer_id = serializers.CharField(max_length=10)

    class Meta:
        model = Match
        # These are the only fields that are validated and represented
        fields = (
            'id', 'job', 'job_id', 'seeker', 'seeker_id', 'employer', 'employer_id', 'seeker_action', 'employer_action',
            'is_archived_employer', 'is_archived_seeker')
        validators = [
            UniqueTogetherValidator(
                queryset=Match.objects.all(),
                fields=('job_id', 'seeker_id', 'employer_id')
                # Think about why this breaks
                # fields = ('job_id', 'seeker_id', 'employer_id', 'seeker_action', 'employer_action')
            )
        ]

    # TODO finish validation logic, seeker
    # Purpose here is to Raise an exception or modify field before becoming validated data
    def validate(self, attrs):
        request = self.context['request']

        if attrs['seeker_action'] == 'skip' or attrs['employer_action'] == 'skip':
            return attrs

        if request.user.is_employer:
            # Check if employer_id is valid
            employer = request.user.employer

            if attrs['employer_id'] != employer.id:
                raise serializers.ValidationError(
                    {'employer_id': ['Your employer id is not allowed to make matches on this account']})

            # Check if the employer has enough credits and if the action
            # if call then does he have free calls, cool, have credits, cool, otherwise raise Error
            # if not (employer.free_calls > 0 or employer.credits > 0):
            #     pass
                # raise serializers.ValidationError({'employer_id': ['You either do not have credits or free calls']})

        elif request.user.is_seeker:
            pass

        return attrs

    # TODO decrease credits/free_apps/free_calls based on the request and same for seeker
    # SKIP first, CALL, then Super and same for seeker.
    def create(self, validated_data):
        request = self.context['request']

        if request.user.is_employer:
            # Another way to get the employer id
            # employer_id = request.user.employer.id

            # All fields are here from the request
            # Validated data has seeker_id, job_id
            # Employer_id from the request

            match = Match.objects.create(**validated_data)

            # Update credits()
            # check action and update the credits appropriately
            # employer.credits -= 1
            # employer.save()

            return match

        elif request.user.is_seeker:
            # Get the employer_id from the Job Model
            # employer_id = Job.objects.get(id=validated_data['job_id']).employer_id
            # seeker_id = request.user.seeker.id
            # return Match.objects.create(seeker_id=seeker_id, employer_id=employer_id, **validated_data)
            return Match.objects.create(**validated_data)
