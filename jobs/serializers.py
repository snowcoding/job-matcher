from rest_framework import serializers

from JobMatcherApp.serializers import EmployerSerializer
from jobs.models import Job


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
