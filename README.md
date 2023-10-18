<h1 align="center">Application de Gestion de Tâches</h1>


## Table des matières
- [Contexte](#contexte)
- [Mise en place de la structure du projet](#mise-en-place-de-la-structure-du-projet)
- [Architecture du site](#architecture-du-site)
- [Gestion du style](#gestion-du-style)
- [Gestion des fonctionnalités de l'application](#gestion-des-fonctionnalités-de-lapplication)
- [Création de modèles](#création-de-modèles)
- [Gestion des événements](#gestion-des-événements)
- [Moyens Utilisés](#moyens-utilisés)
---
## Demo

Ce projet est hébergé sur GitHub Pages, ce qui signifie que vous pouvez accéder à l'application en ligne en suivant le lien : [Application de Gestion de Tâches](https://djed90.github.io/06-la-js-todo/).
## Contexte

L'objectif de cette application est de créer une plateforme de gestion de tâches complète. Les utilisateurs peuvent ajouter, modifier, supprimer, renommer, rechercher et effectuer des opérations de glisser-déposer sur leurs tâches. Cette application vise à simplifier la gestion des tâches personnelles ou professionnelles.

## Mise en place de la structure du projet

La structure du projet a été organisée en utilisant des fichiers séparés pour différentes parties de l'application. De plus, une configuration Webpack a été mise en place pour séparer le développement de la production, assurant ainsi une gestion efficace du code source.

## Architecture du site

L'architecture de l'application a été inspirée par divers sites Web similaires, identifiés à travers des recherches sur Google. La maquette a été conçue en utilisant Figma. Les éléments clés de l'interface utilisateur comprennent un en-tête avec un logo, une barre de recherche, et un bouton pour activer ou désactiver le mode sombre. De plus, une section dédiée est prévue pour afficher les tâches de l'utilisateur.

## Gestion du style

Pour définir les styles de l'application, des fichiers SASS ont été utilisés. La gestion des styles a été configurée avec un plugin pour extraire les fichiers de style, garantissant une présentation soignée de l'application.

## Gestion des fonctionnalités de l'application

Les fonctionnalités de l'application sont gérées à l'aide de fichiers JavaScript distincts. Ces fichiers sont importés dans le code source de l'application, et les fonctions correspondantes sont appelées pour initialiser les fonctionnalités spécifiques, telles que l'ajout de tâches, la recherche, la gestion du mode sombre, etc.

## Création de modèles

Des modèles HTML ont été utilisés pour structurer le contenu de l'application. Ces modèles sont clonés et injectés dans le conteneur de l'application à l'aide de fichiers JavaScript. Cela permet d'afficher dynamiquement les tâches et d'assurer une gestion efficace du contenu.

## Gestion des événements

La gestion des événements est réalisée à l'aide de gestionnaires d'événements JavaScript. Ces gestionnaires permettent d'interagir avec les éléments HTML de l'application. Par exemple, lorsqu'un utilisateur clique sur un bouton, effectue une recherche, ouvre un menu, les gestionnaires d'événements gèrent ces interactions. De plus, toutes les modifications sont stockées et récupérées via le `localStorage`, garantissant que les utilisateurs peuvent retrouver leurs tâches même après la fermeture de l'application.

## Moyens Utilisés

Les moyens suivants ont été utilisés pour développer cette application de gestion de tâches :

- WebPack
- NodeJS
- Npm
- Figma (pour la conception de la maquette)
- Google (pour la recherche d'inspiration)
- ChatGPT (pour des informations et des conseils)
- SASS (pour la gestion des styles)
- Uiverse (pour des éléments de design)
- Vistaprint-Logo (pour la création du logo)
- GIT/GITHUB/GITPAGE (pour le contrôle de version et le déploiement)
- Babel

C'est tout pour le README de cette application de gestion de tâches. Si vous avez des questions ou avez besoin de plus d'informations, n'hésitez pas à nous contacter. Bonne utilisation de l'application !
