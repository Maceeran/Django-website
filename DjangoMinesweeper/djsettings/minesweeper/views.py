from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . models import saveGame


def form_mapsize(request):
    return render(request, 'minesweeper/form_initial.html')


def minesweeper(request):
    context = {
        'height': request.POST.get('height'),
        'width': request.POST.get('width'),
        'mineratio': request.POST.get('mineratio'),
    }
    return render(request, 'minesweeper/main.html', context);

def getSave(request):
    idReq = request.POST.get("idReq");
    save = saveGame.objects.get(id=idReq);
    return HttpResponse(save);

def getSavesArray(request):
    saves = saveGame.objects.all()
    savesArray = []
    for i in range(saves.count()):
        savesArray.append({
            "id" : saves[i].id,
            "title" : saves[i].title,
            "date" : saves[i].date.strftime("%Y-%m-%d %H:%M:%S"),
            "gameHTML" : saves[i].gameHTML
        });
    return JsonResponse(savesArray, safe=False)

def savegame(request):
    save = saveGame()
    save.gameHTML = request.POST.get("htm")
    save.save()
    return HttpResponse(True);

def loadgame(request):
    save = saveGame()
    save.gameHTML = request.POST.get("htm")
    save.save()
    return HttpResponse(True);