from rest_framework import views
from django.urls import path
from .views import *
from django.urls import path

urlpatterns = [
    path('register/', registerAPIView.as_view()),
    path('login/', LoginAPIView.as_view()),
    path('', UserView.as_view()),
    path('logout/', LogoutView.as_view())
]