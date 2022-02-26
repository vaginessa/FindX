from django.shortcuts import render

# Create your views here.
def login(request):
     '''View function to present users with account choices'''
     title = 'Login'
     return render(request,'registration/login.html',{'title': title})