# Portfolio Next.js - Développeur Full-Stack

Un portfolio moderne et élégant construit avec Next.js, TypeScript et Tailwind CSS, inspiré du design du portfolio d'Aayush Bharti.

## 🚀 Fonctionnalités

- **Design moderne et responsive** avec une interface utilisateur élégante
- **Animations fluides** utilisant Framer Motion
- **Composants réutilisables** avec des variantes personnalisables
- **Navigation fixe** avec menu mobile responsive
- **Sections complètes** : Hero, À propos, Projets, Contact
- **Optimisé SEO** avec métadonnées complètes
- **Accessibilité** avec support des lecteurs d'écran
- **Mode sombre/clair** automatique selon les préférences système

## 🛠️ Technologies utilisées

- **Framework** : Next.js 14 avec App Router
- **Langage** : TypeScript
- **Styling** : Tailwind CSS avec variables CSS personnalisées
- **Animations** : Framer Motion
- **Composants UI** : Radix UI + composants personnalisés
- **Icônes** : Lucide React
- **Utilitaires** : class-variance-authority, clsx, tailwind-merge

## 📁 Structure du projet

```
src/
├── app/
│   ├── globals.css          # Styles globaux et variables CSS
│   ├── layout.tsx           # Layout principal avec métadonnées
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── ui/                  # Composants UI de base
│   │   ├── button.tsx       # Bouton avec variantes
│   │   ├── card.tsx         # Composant carte
│   │   └── badge.tsx        # Composant badge
│   └── sections/            # Sections du portfolio
│       ├── header.tsx       # Navigation et header
│       ├── hero.tsx         # Section d'accueil
│       ├── about.tsx        # Section à propos
│       ├── projects.tsx     # Section projets
│       ├── contact.tsx      # Section contact
│       └── footer.tsx       # Pied de page
└── lib/
    └── utils.ts             # Fonctions utilitaires
```

## 🎨 Composants principaux

### Header
- Navigation fixe avec backdrop blur
- Menu mobile responsive
- Liens sociaux et CTA

### Hero
- Titre principal avec gradient
- Badge de disponibilité animé
- Boutons d'action et liens sociaux
- Indicateur de défilement

### À propos
- Présentation personnelle
- Compétences techniques organisées par catégorie
- Statistiques et expériences
- Design en deux colonnes

### Projets
- Projet vedette en évidence
- Grille de projets avec hover effects
- Badges de technologies
- Liens vers GitHub et démo

### Contact
- Formulaire de contact complet
- Méthodes de contact alternatives
- Actions rapides (appel, discussion)
- Statut de disponibilité

## 🚀 Installation et démarrage

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd portfolio-nextjs
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer en mode développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📱 Responsive Design

Le portfolio est entièrement responsive avec :
- **Mobile First** : Optimisé pour les petits écrans
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation mobile** : Menu hamburger avec animations
- **Grilles adaptatives** : Colonnes qui s'adaptent à la taille d'écran

## 🎭 Animations

- **Entrées** : Fade-in et slide-up progressifs
- **Hover effects** : Transformations et transitions fluides
- **Scroll animations** : Animations déclenchées au scroll
- **Micro-interactions** : Feedback visuel sur les interactions

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `globals.css` avec des variables CSS :
```css
:root {
  --primary: #3b82f6;
  --accent: #f59e0b;
  --background: #ffffff;
  --foreground: #171717;
}
```

### Composants
Chaque composant utilise `class-variance-authority` pour des variantes personnalisables :
```tsx
<Button variant="gradient" size="lg">
  Mon bouton
</Button>
```

## 📈 Performance

- **Lazy loading** des composants avec `whileInView`
- **Optimisations CSS** avec Tailwind CSS
- **Images optimisées** (à implémenter avec Next.js Image)
- **Bundle splitting** automatique de Next.js

## 🔧 Scripts disponibles

- `npm run dev` : Démarrage en mode développement
- `npm run build` : Build de production
- `npm run start` : Démarrage en mode production
- `npm run lint` : Vérification ESLint

## 📝 Personnalisation du contenu

### Informations personnelles
Modifiez les composants dans `src/components/sections/` pour :
- Changer le nom et la description
- Mettre à jour les compétences
- Ajouter vos projets
- Modifier les informations de contact

### Projets
Éditez le tableau `projects` dans `projects.tsx` :
```tsx
const projects = [
  {
    title: "Mon Projet",
    description: "Description du projet",
    technologies: ["React", "Node.js"],
    github: "https://github.com/...",
    live: "https://demo.com",
    featured: true
  }
];
```

## 🌐 Déploiement

### Vercel (Recommandé)
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déploiement automatique à chaque push

### Autres plateformes
- **Netlify** : Compatible avec Next.js
- **Railway** : Déploiement simple
- **Docker** : Containerisation possible

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Soumettre des pull requests

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- Design inspiré du portfolio d'Aayush Bharti
- Composants basés sur Radix UI
- Icônes de Lucide React
- Communauté Next.js et Tailwind CSS

---

**Créé avec ❤️ en utilisant Next.js, TypeScript et Tailwind CSS**
