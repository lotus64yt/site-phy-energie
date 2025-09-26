# Énergies de France - Site Éducatif

Un site web éducatif moderne dédié à l'étude du nucléaire et de l'hydroélectrique, les deux piliers de la production électrique française décarbonée.

## 🎯 Objectif

Ce site présente de manière interactive et détaillée les technologies énergétiques majeures de la France : l'énergie nucléaire et l'énergie hydroélectrique, avec leurs ressources primaires, convertisseurs, rendements et répartition géographique.

## ✨ Fonctionnalités

- **4 pages dédiées** : Accueil, Nucléaire, Hydroélectrique, Comparaison
- **Schémas interactifs** : Centrales nucléaires et hydroélectriques animées
- **Données complètes** : Rendements, productions, localisations géographiques
- **Interface moderne** : Design responsive avec support du mode sombre
- **Comparaison technique** : Tableaux détaillés des avantages/inconvénients

## 🏗️ Structure du Projet

```
src/
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Composant bouton réutilisable
│   │   └── Card.tsx         # Composant carte réutilisable
│   ├── EnergyChainDiagram.tsx # Diagrammes de chaînes d'énergie
│   ├── Footer.tsx           # Pied de page
│   ├── Header.tsx           # En-tête avec navigation
│   ├── Hero.tsx             # Section héro
│   ├── MainContent.tsx      # Contenu principal
│   ├── Navigation.tsx       # Navigation par sections
│   └── StatsSection.tsx     # Section statistiques
```

## 🚀 Démarrage Rapide

1. **Installation des dépendances** :
```bash
npm install
```

2. **Lancement du serveur de développement** :
```bash
npm run dev
```

3. **Accès au site** :
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Technologies Utilisées

- **Next.js 15** : Framework React pour le développement web
- **TypeScript** : Pour un code type-safe
- **Tailwind CSS** : Framework CSS utilitaire pour le styling
- **React** : Bibliothèque pour l'interface utilisateur

## 📚 Structure du Site

### 🏠 Page d'Accueil
- Vue d'ensemble du mix énergétique français
- Navigation vers les sections spécialisées
- Statistiques clés (78% de production décarbonée)

### ⚛️ Énergie Nucléaire (`/nucleaire`)
- **Ressources primaires** : Uranium 235/238, enrichissement
- **Convertisseurs** : Fission → Vapeur → Turbine → Électricité
- **Schéma interactif** : Réacteur PWR avec circuits primaire/secondaire
- **Rendement** : 33% global avec détail des pertes
- **Production** : 67.1% du mix, 56 réacteurs, 61.4 GW
- **Géographie** : Principales centrales (Gravelines, Paluel, Cattenom...)

### 💧 Énergie Hydroélectrique (`/hydroelectrique`)
- **Ressources primaires** : Eau en mouvement, relief topographique
- **Convertisseurs** : Barrage → Conduite → Turbine → Alternateur
- **Schéma interactif** : Barrage-réservoir vs au fil de l'eau
- **Rendement** : 85% global (excellent)
- **Production** : 11.2% du mix, 25.7 GW, 63 TWh
- **Types** : Haute/moyenne/basse chute
- **Géographie** : Alpes (60%), Pyrénées (25%), CNR

### ⚖️ Comparaison (`/comparaison`)
- **Tableau comparatif** : Rendement, production, coûts, environnement
- **Avantages/Inconvénients** détaillés de chaque technologie
- **Répartition géographique** : Complémentarité des implantations
- **Perspectives 2050** : EPR2, SMR, STEP, rénovation du parc

## 🎯 Personnalisation

Le site est conçu avec une structure modulaire permettant :

- **Ajout facile de contenu** : Modifier les textes et descriptions dans les composants
- **Nouveaux diagrammes** : Utiliser le composant `EnergyChainDiagram` pour créer de nouvelles visualisations
- **Styling personnalisé** : Modifier les couleurs et styles via Tailwind CSS
- **Nouvelles sections** : Ajouter des composants supplémentaires selon les besoins

## 🔧 Développement

### 🔧 Composants Interactifs

- **NuclearPlantDiagram** : Schéma animé d'une centrale nucléaire PWR
  - Animation pas-à-pas du processus
  - Circuits primaire/secondaire/refroidissement
  - Températures et pressions en temps réel
  - Composants cliquables avec explications

- **HydroPlantDiagram** : Schéma animé d'une centrale hydroélectrique
  - Sélection barrage-réservoir / au fil de l'eau
  - Animation des flux d'eau
  - Formules de calcul (P = ρ × g × Q × H)
  - Efficacité de chaque étape

### 📊 Données Intégrées

Toutes les données proviennent de `src/lib/energyData.ts` :

- **Statistiques officielles** : RTE, Ministère de la Transition Énergétique
- **Caractéristiques techniques** : Rendements, puissances, localisations
- **Centrales réelles** : Coordonnées GPS, capacités, technologies
- **Données 2023** : Production, mix énergétique actualisé

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte aux différentes tailles d'écran :
- Mobile : Navigation hamburger
- Tablette : Adaptation des grilles
- Desktop : Interface complète

## 🌙 Mode Sombre

Support complet du mode sombre avec adaptation automatique selon les préférences du système.

## 🎓 Utilisation Pédagogique

### Niveau : Lycée / Enseignement Supérieur
- **Physique-Chimie** : Chaînes d'énergie, rendements, conversions
- **Sciences de l'Ingénieur** : Systèmes énergétiques, technologies
- **Géographie** : Répartition territoriale, enjeux énergétiques
- **Économie** : Mix énergétique, coûts, transitions

### Activités Suggérées
1. **Analyse comparative** : Compléter le tableau de comparaison
2. **Calculs énergétiques** : Utiliser les formules hydroélectriques
3. **Cartographie** : Localiser les centrales sur carte de France
4. **Débat** : Avantages/inconvénients de chaque technologie
5. **Prospective** : Évolution du mix énergétique français

## 🌟 Points Forts Éducatifs

- ✅ **Données authentiques** : Chiffres officiels du secteur énergétique
- ✅ **Visualisation interactive** : Schémas animés pour comprendre les processus
- ✅ **Approche systémique** : De la ressource primaire à l'électricité finale
- ✅ **Ancrage territorial** : Géographie énergétique de la France
- ✅ **Enjeux contemporains** : Transition énergétique, décarbonation

---

**🎯 Objectif pédagogique** : Comprendre les technologies énergétiques françaises majeures à travers une approche scientifique, technique et géographique complète.
