from django.urls import path

from .views import BadgeListView, MyProgressView


urlpatterns = [
    path("badges/", BadgeListView.as_view(), name="badges"),
    path("me/", MyProgressView.as_view(), name="my-progress"),
]

