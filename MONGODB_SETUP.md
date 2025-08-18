# 🚀 Configuration MongoDB pour Portfolio Next.js

Ce guide vous explique comment configurer MongoDB Atlas pour remplacer les projets codés en dur par une base de données dynamique.

## 📋 Prérequis

- Compte MongoDB Atlas (gratuit)
- Node.js et npm installés
- Projet Next.js configuré

## 🔧 Installation

### 1. Installer les dépendances
```bash
npm install mongodb mongoose
npm install -D tsx
```

### 2. Configuration MongoDB Atlas

#### Créer un compte Atlas
1. Allez sur [mongodb.com/atlas](https://mongodb.com/atlas)
2. Créez un compte gratuit (M0 tier - 512MB)

#### Créer un cluster
1. Cliquez "Build a Database"
2. Choisissez "FREE" (M0)
3. Sélectionnez votre région
4. Cliquez "Create"

#### Configurer la sécurité
1. **Database Access** : Créez un utilisateur avec mot de passe
2. **Network Access** : Ajoutez votre IP ou `0.0.0.0/0` pour tout autoriser

#### Obtenir l'URI de connexion
1. Cliquez "Connect" sur votre cluster
2. Choisissez "Connect your application"
3. Copiez l'URI de connexion

### 3. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/DATABASE?retryWrites=true&w=majority
```

**Exemple :**
```env
MONGODB_URI=mongodb+srv://wesley:password123@cluster0.abc123.mongodb.net/portfolio?retryWrites=true&w=majority
```

## 🗄️ Structure de la base de données

### Modèle Project
```typescript
interface Project {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gradient: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  category: 'Frontend' | 'Backend' | 'Full Stack' | 'Mobile' | 'Other';
  difficulty: 'Easy' | 'Intermediate' | 'Difficult';
  features: string[];
  isPublished: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}
```

## 🚀 Migration des données

### 1. Exécuter le script de migration
```bash
npm run migrate
```

Ce script va :
- Se connecter à MongoDB
- Supprimer les projets existants
- Créer tous vos projets actuels dans la base de données

### 2. Vérifier la migration
Le script affichera :
- ✅ Projets créés avec succès
- 📊 Nombre total de projets
- 📋 Liste des projets migrés

## 🌐 API Endpoints

### Récupérer tous les projets
```
GET /api/projects
```

**Paramètres de requête :**
- `category` : Filtrer par catégorie
- `difficulty` : Filtrer par difficulté
- `limit` : Limiter le nombre de résultats

**Exemple :**
```
GET /api/projects?category=Full%20Stack&limit=5
```

### Récupérer un projet spécifique
```
GET /api/projects/[id]
```

### Créer un nouveau projet
```
POST /api/projects
```

**Body :**
```json
{
  "title": "Nouveau Projet",
  "shortDescription": "Description courte",
  "fullDescription": "Description complète",
  "image": "/image.png",
  "gradient": "linear-gradient(...)",
  "technologies": ["React", "TypeScript"],
  "accentColor": "#3B82F6",
  "category": "Full Stack",
  "difficulty": "Intermediate",
  "features": ["Feature 1", "Feature 2"]
}
```

### Mettre à jour un projet
```
PUT /api/projects/[id]
```

### Supprimer un projet
```
DELETE /api/projects/[id]
```

## 🎣 Hooks React

### useProjects
```typescript
const { projects, loading, error, total, refetch } = useProjects({
  category: 'Full Stack',
  difficulty: 'Intermediate',
  limit: 10
});
```

### useProject
```typescript
const { project, loading, error } = useProject('project-id');
```

## 🔍 Test de l'API

### 1. Démarrer le serveur de développement
```bash
npm run dev
```

### 2. Tester l'endpoint
```bash
curl http://localhost:3000/api/projects
```

### 3. Vérifier dans MongoDB Atlas
- Allez dans votre cluster
- Cliquez "Browse Collections"
- Vérifiez que vos projets sont présents

## 🛠️ Gestion des erreurs

### Erreurs courantes
1. **MONGODB_URI manquant** : Vérifiez votre fichier `.env.local`
2. **Connexion échouée** : Vérifiez vos paramètres Atlas
3. **Validation échouée** : Vérifiez les données envoyées

### Debug
```typescript
// Dans vos composants
if (error) {
  console.error('Erreur MongoDB:', error);
}
```

## 📱 Interface d'administration

Pour une gestion facile des projets, vous pouvez créer une interface d'administration :

1. **Page de création** : Formulaire pour ajouter des projets
2. **Page de liste** : Voir, éditer, supprimer des projets
3. **Page d'édition** : Modifier un projet existant

## 🔒 Sécurité

### Bonnes pratiques
1. **Variables d'environnement** : Ne jamais commiter `.env.local`
2. **Validation** : Toujours valider les données côté serveur
3. **Authentification** : Ajouter une authentification pour l'admin
4. **Rate limiting** : Limiter les requêtes API

### Exemple de validation
```typescript
// Dans votre API
if (!body.title || body.title.length > 100) {
  return NextResponse.json(
    { error: 'Title is required and must be less than 100 characters' },
    { status: 400 }
  );
}
```

## 🚀 Déploiement

### Vercel
1. Ajoutez `MONGODB_URI` dans vos variables d'environnement Vercel
2. Déployez votre application

### Autres plateformes
1. Configurez la variable `MONGODB_URI`
2. Assurez-vous que MongoDB Atlas accepte les connexions depuis votre plateforme

## 📚 Ressources

- [Documentation MongoDB Atlas](https://docs.atlas.mongodb.com/)
- [Documentation Mongoose](https://mongoosejs.com/docs/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifiez les logs de votre serveur
2. Vérifiez la console MongoDB Atlas
3. Testez votre connexion avec MongoDB Compass
4. Vérifiez que votre IP est autorisée dans Atlas

---

**🎉 Félicitations !** Votre portfolio utilise maintenant MongoDB pour une gestion dynamique des projets !
