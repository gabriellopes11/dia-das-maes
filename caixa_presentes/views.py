from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def caixa_presentes(request):
    return render(request, 'caixa_presentes/caixa.html')
