# Configuration des fichiers dockerfile et compose.yaml

Les fichiers `dockerfile` ou `compose.yaml` sont placés chancun dans des repertoires spécifiques avec une connotation **.prod** ou **.preprod** pour spécifier le context dans lequel ils doivent être utiliser.

- autodeclic-python : contenant les fichiers nécessaire au déploiement de l'application **python**.

- autodeclic-react : contenant les fichiers nécessaire au déploiement de l'application **react** et du serveur **nginx**.

- autodeclic-symfony : contenant les fichiers nécessaire au déploiement de l'application symfony

- docker-preprod : contenant les fichiers de configuration du serveur **nginx** et le fichier **compose.yaml** pour un déploiement de tous les services en **pré-production**.

- docker-prod : contenant les fichiers de configuration du serveur **nginx** et le fichier **compose.yaml** pour un déploiement de tous les services en **production**.

### Lancer l'image en préproduction

1 se mettre dans le dossier dans le dossier de préproduction ( si vous y êtes déjà ingorez)
``` bash
cd ./docker-preprod
```
2 lancer le build
``` bash
docker compose up
```
ou si le nom venait à changer
``` bash
docker compose -f <chemin/vers/nom_du_fichier.yml> up
```


### Lancer l'image en production

1 se mettre dans le dossier dans le dossier de préproduction ( si vous y êtes déjà ingorez)
``` bash
cd ./docker-prod
```
2 lancer le build
``` bash
docker compose up
```
ou si le nom venait à changer
``` bash
docker compose -f <chemin/vers/nom_du_fichier.yml> up
```

### Fichier modifier
Certains fichiers ont été créés afin d'assurer une indépendance entre le déploiement en production et en préproduction notamenet :
- ./docker-preprod/nginx/default.preprod.conf
- ./docker-preprod/nginx/default.preprod.http.conf
- ./docker-preprod/nginx/default.preprod.ssl.conf
- ./autodeclic-symfony/bin/frankenphp/conf.d/app.preprod.ini
