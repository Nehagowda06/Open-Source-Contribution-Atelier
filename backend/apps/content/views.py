from rest_framework import viewsets

from .models import Lesson
from .serializers import LessonSerializer


class LessonViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Lesson.objects.prefetch_related("exercises").all()
    serializer_class = LessonSerializer

