from django.urls import path, include
from .views import *
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', ItemList.as_view()),
    path('<int:pk>', ItemDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
