from rest_framework import permissions
from rest_framework.generics import ListAPIView

from .models import Badge, LessonProgress
from .serializers import BadgeSerializer, LessonProgressSerializer


class BadgeListView(ListAPIView):
    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class MyProgressView(ListAPIView):
    serializer_class = LessonProgressSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return LessonProgress.objects.filter(user=self.request.user).select_related("lesson")

