from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.Show_all , name= "show_all"),
    path('newslettres', views.submit_form, name='show_subscribers'),
    path('trends/', views.Show_featured , name= "show_all"),
    path('categories/<str:name>/', views.search_category , name="search_category"),
    path('post/<str:title>/', views.search_post , name="search_post"),
    path('newslettres/show/', views.show_subscribers , name="show_sub"),
] 