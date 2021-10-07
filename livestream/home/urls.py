from django.urls import path
from . import views

urlpatterns = [
    path('stream', views.home, name='home'),
    path('', views.nav, name='nav')
]