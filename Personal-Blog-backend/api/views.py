from django.shortcuts import render
from rest_framework.response import Response
from .models import BlogPost 
from .models import NewsletterSubscriber
from .serializers import BlogPostSerializer
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .serializers import NewsletterSubscriberSerializer
import json
from django.views.decorators.csrf import csrf_exempt


@api_view(['GET'])
def Show_all(request):
    postes = BlogPost.objects.order_by('-date_created')
    serializer = BlogPostSerializer(postes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def Show_featured(request):
    postes = BlogPost.objects.filter(trendy=True).order_by('-date_created')
    serializer = BlogPostSerializer(postes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def search_category(request, name):
    postes = BlogPost.objects.filter(category=name)
    serializer = BlogPostSerializer(postes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def search_post(request, title):
    poste = BlogPost.objects.get(pk=title)
    serializer = BlogPostSerializer(poste, many=False)
    return Response(serializer.data)













@csrf_exempt
@api_view(['POST'])
def submit_form(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        name = data.get('name')
        email = data.get('email')
        print(name)
        serializer = NewsletterSubscriberSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message': 'Form submitted successfully.', 'name': name, 'email': email})
        return JsonResponse(serializer.errors, status=400)
    
    return JsonResponse({'message': 'Invalid request method.'}, status=405)


@api_view(['GET'])
def show_subscribers(request):
    subscribers= NewsletterSubscriber.objects.all()
    serializer = NewsletterSubscriberSerializer(subscribers , many=True)
    return Response(serializer.data)