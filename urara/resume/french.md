---
title: French CV
date: 2022-09-26
tags:
  - reactjs
  - nodejs
  - golang
  - python
  - docker
  - kubernetes
  - postgres
  - elasticsearch
  - redis
  - linux
  - github action
  - microservices
---

# Biographie

Jeune développeur indépendant, je suis passionné par l'informatique. J'ai acquis une expertise dans le développement fullstack et devops. Après obtention de mon dernier diplôme, j'enseigne les concepts microservices et le test de performances auprès de plusieurs écoles d'informatique. J'aime voyager, la pratique de la boxe anglaise et la lecture.

|                |                                                            |
| -------------- | ---------------------------------------------------------- |
| Nom            | Mohammad-Amine BANAEI                                      |
| Poste          | Développeur Full-stack, DevOps, Intervenant                |
| Nationalité    | Française                                                  |
| Téléphone      | +33 6 61 93 90 82                                          |
| Email          | mohammadamine.banaei@pm.me                                 |
| Linkedin       | [linkedin.com/in/mbnei](https://www.linkedin.com/in/mbnei) |
| Github         | [MohammadBnei](https://github.com/MohammadBnei)            |
| Site personnel | [bnei.dev](https://bnei.dev)                               |
| Voc On Steroid | [voconsteroid.com](https://voconsteroid.com)               |


# Diplômes

Diplômé du cycle d'Ingénierie du Web à l'ESGI, niveau Bac + 5

# Experiences professionnelles

## Développeur

J'a pu exercer le metier de développeur lors de mes différentes alternances et apres obtention du diplôme pour l'entreprise que je monte : [Voc On Steroid](https://voconsteroid.com).

### Fastory

[Fastory](https://www.fastory.io) est une entreprise permettant la création de micro-sites, mini-jeux, bots conversationnels... visant le mobile pour le monde de l'évènementiel. Nous avions comme client des grands noms de l'industrie (SFR, les JO, Warner group...)

J'y occupais un poste de **développeur full-stack** dans le cadre de ma 5ème année d'alternance, avec pour principales technologies NodeJS - React - PostgreSQL.

#### Résolution de bogues et prise en main

Une des premières tâches que j'ai effectué a été la résolution de bogue et de la modification stylistique. En **NodeJS**, **React** et **Postgres**, ces affectations m'ont permis de découvrir le code en profondeur et d'appréhender le fonctionnement des différentes parties de l'application.
De plus, nous souhaitions transformer le code React javascript en typescript, et passer des composants de type "class" à des composants de type fonction. 

#### Webhook

Lorsqu'un utilisateur allait sur le micro-site ou jouait à un mini-jeu, un bot facilitait l'enregistrement des coordonnées de l'utilisateur d'une manière plus engageante qu'un formulaire classique. 
Cependant, ces informations devaient en premier lieu aller sur nos base de donnée (les conversations allaient sur **ElasticSearch** et **Postgres**) avant d'être mis en disponibilité pour nos clients via un dashboard.

Afin de permettre à nos clients un lien direct et en temps réel aux donnés utilisateurs extraites, il me fut confié la tâche de créer un [webhook](https://fr.wikipedia.org/wiki/Webhook). 
Je commençais donc par ajouter un plugin optionnel au pannel de l'application. Dans ce plugin, le client spécifiait une URL d'externalisation ainsi qu'un token d'authentification/autorisation. 
Ensuite, il fallut modifier le comportement d'enregistrement des données du bot afin qu'en parallèle de la sauvegarde dans nos bases de données, les informations s'envoient automatiquement vers l'url paramétrée.

Enfin, je dus gérer les erreurs. Premièrement, il était possible de tester l'url et le token directement depuis le dashboard. Ensuite, il y avait une boucle d'essai d'envoi si l'url ne fonctionnait pas au moment effectif. Enfin, si les erreurs persistaient, alors elles étaient enregistrées puis remontées au service client. 

Pour la partie front-end en **React**, ma mission se focalisait sur la création du plugin dans le dashboard.

#### Leaderboard

Nous avions des mini-jeux, créés pour la plupart spécifiquement selon les désirs du clients. Pour maximiser l'engagement, un tableau récapitulatif des meilleurs scores était nécessaire.

Pour la création de ce **leaderboard**, on me conseilla l'utilisation de **Redis** qui propose nativement un stockage de donnée sous la forme souhaitée :
- Enregistrement clé-valeur (la clé sera le nom du joueur, la valeur son score)
- Liste ordonnée en fonction du score
- Affichage des meilleurs joueurs (top 5, 10, 15)

Redis étant une base de données enregistrée en mémoire vive, cette technologie convient particulièrement aux besoins en temps réel d'une utlisation massive des mini-jeux. Pour le stockage longue durée cependant, il fallut basculer sur **Postgres** et créer un mécanisme semblable aux *systèmes de cache* afin de maximiser les avatanges de Redis et Postgres.







