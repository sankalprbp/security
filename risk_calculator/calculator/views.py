from django.shortcuts import render
from .models import RiskAssessmentFactor

def calculator_view(request):
    factors = RiskAssessmentFactor.objects.all()
    context = {'factors': factors}
    return render(request, 'calculator/calculator.html', context)