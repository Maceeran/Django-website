from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.form_mapsize),
    path('/game', views.minesweeper),
    path('/savegame', views.savegame),
    path('/getSavesList', views.getSave),
    path('/getSavesArray', views.getSavesArray),
]