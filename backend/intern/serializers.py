from rest_framework import serializers
from .models import Intern

class InternSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intern
        fields = '__all__'