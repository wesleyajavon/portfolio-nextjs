import { connectDB } from '../src/lib/mongodb';
import Project from '../src/lib/models/Project';

// Vos projets actuels codés en dur
const hardcodedProjects = [
  {
    title: "YouCode",
    shortDescription: "Modern LMS platform",
    fullDescription: "💻 A modern Learning Management System (LMS) built with Next.js, featuring NextAuth authentication and PostgreSQL database for seamless educational content management.",
    image: "/YouCode.png",
    gradient: "linear-gradient(188.62deg, #1E3A8A 49.9%, #3B82F6 81.7%, #60A5FA 93.88%, #93C5FD 113.5%)",
    technologies: ["Next.js", "NextAuth", "TypeScript", "PostgreSQL", "Grok AI"],
    liveUrl: "https://youcode-nextjs.vercel.app/",
    githubUrl: "https://github.com/wesleyajavon/youcode-nextjs",
    accentColor: "#3B82F6",
    features: ["Course Management System", "User-Friendly Learning Experience", "Artificial Intelligence", "NextAuth Authentication", "PostgreSQL Database", "Responsive Design"],
    category: "Full Stack",
    difficulty: "Difficult",
    order: 1
  },
  {
    title: "Finly",
    shortDescription: "Financial dashboard app",
    fullDescription: "💶 A modern financial dashboard built with Next.js and TypeScript, featuring interactive charts and comprehensive financial data visualization.",
    image: "/Finly.png",
    gradient: "linear-gradient(188.62deg, #065F46 49.9%, #10B981 81.7%, #34D399 93.88%, #6EE7B7 113.5%)",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    liveUrl: "https://finly-nextjs.vercel.app/",
    githubUrl: "https://github.com/wesleyajavon/finly-nextjs",
    accentColor: "#10B981",
    features: ["Financial Dashboard", "Interactive Charts", "Comprehensive Financial Data Visualization", "Real-time Data Updates", "Responsive Design", "Loading State"],
    category: "Full Stack",
    difficulty: "Easy",
    order: 2
  },
  {
    title: "Task Manager V2.1",
    shortDescription: "Full-stack task app",
    fullDescription: "📝 A full-stack task management application with MongoDB backend, JWT authentication, and comprehensive CRUD operations for seamless task organization.",
    image: "/TaskManager.png",
    gradient: "linear-gradient(188.62deg, #7C2D12 49.9%, #EA580C 81.7%, #FB923C 93.88%, #FED7AA 113.5%)",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript", "JWT authentication"],
    liveUrl: "https://task-manager-react-v2.vercel.app/",
    githubUrl: "https://github.com/wesleyajavon/task-manager-react-v2",
    accentColor: "#EA580C",
    features: ["Task Management", "CRUD Operations", "JWT Authentication", "MongoDB Backend", "Filtering", "Task Categories"],
    category: "Full Stack",
    difficulty: "Intermediate",
    order: 3
  },
  {
    title: "Chef Claude",
    shortDescription: "AI recipe generator",
    fullDescription: "👨🏾‍🍳 An interactive React app powered by Claude Anthropic AI that generates random recipes with detailed ingredients and cooking instructions.",
    image: "/ChefClaude.png",
    gradient: "linear-gradient(188.62deg, #3D1A7A 49.9%, #7E22CE 81.7%, #C084FC 93.88%, #F9D793 113.5%)",
    technologies: ["React", "Claude Anthropic AI", "API"],
    liveUrl: "https://chef-claude-react.vercel.app/",
    githubUrl: "https://github.com/wesleyajavon/chef-claude-react/tree/main/chef_claude",
    accentColor: "#7E22CE",
    features: ["AI Recipe Generator", "Interactive UI", "Recipe Search", "Claude AI Integration", "Ingredient Lists"],
    category: "Full Stack",
    difficulty: "Easy",
    order: 4
  },
  {
    title: "Blog",
    shortDescription: "RESTful blog API",
    fullDescription: "💻 A RESTful Blog API built with Node.js and Express, featuring SQLite database and JWT authentication for secure blog post management.",
    image: "/Blog.png",
    gradient: "linear-gradient(188.62deg, #134E4A 49.9%, #14B8A6 81.7%, #5EEAD4 93.88%, #F9D793 113.5%)",
    technologies: ["Node.js", "Express.js", "SQLite", "JWT authentication"],
    liveUrl: "https://blog-nodejs-t006.onrender.com/",
    githubUrl: "https://github.com/wesleyajavon/blog-nodejs",
    accentColor: "#14B8A6",
    features: ["Blog System", "RESTful API", "JWT Authentication", "SQLite Database", "CRUD Operations", "Secure Endpoints"],
    category: "Full Stack",
    difficulty: "Intermediate",
    order: 5
  },
  {
    title: "Assembly Endgame",
    shortDescription: "React Hangman game",
    fullDescription: "🎮 A modern React-based Hangman game featuring clean UI design, CSS Modules styling, and dynamic word fetching via API integration.",
    image: "/Assembly.png",
    gradient: "linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F472B6 93.88%, #F9D793 113.5%)",
    technologies: ["React", "JavaScript (ES6+)", "CSS Modules", "Fetch API"],
    liveUrl: "https://assembly-endgame-react.vercel.app/",
    githubUrl: "https://github.com/wesleyajavon/assembly-endgame-react",
    accentColor: "#DB2777",
    features: ["Hangman Game", "Interactive UI", "Word Fetching API", "CSS Modules", "Responsive Design", "Game Logic"],
    category: "Frontend",
    difficulty: "Easy",
    order: 6
  },
  {
    title: "Tenzies",
    shortDescription: "React dice game",
    fullDescription: "🎲 A fun React-based dice game where players roll dice to achieve matching numbers, featuring smooth animations and engaging gameplay.",
    image: "/Tenzies.png",
    gradient: "linear-gradient(188.62deg, #1E40AF 49.9%, #3B82F6 81.7%, #60A5FA 93.88%, #93C5FD 113.5%)",
    technologies: ["React", "JavaScript (ES6+)", "CSS", "Local Storage"],
    liveUrl: "https://tenzies-react-game.vercel.app/",
    githubUrl: "https://github.com/wesleyajavon/tenzies-react-game",
    accentColor: "#3B82F6",
    features: ["Dice Game", "Interactive Gameplay", "Smooth Animations", "Local Storage", "Responsive Design", "Game Statistics"],
    category: "Frontend",
    difficulty: "Easy",
    order: 7
  },
  {
    title: "Meme Generator",
    shortDescription: "React meme creator",
    fullDescription: "😄 A creative React app for generating custom memes with user-uploaded images and text overlays, featuring drag-and-drop functionality.",
    image: "/MemeGenerator.png",
    gradient: "linear-gradient(188.62deg, #7C2D12 49.9%, #EA580C 81.7%, #FB923C 93.88%, #FED7AA 113.5%)",
    technologies: ["React", "JavaScript (ES6+)", "HTML5 Canvas", "File Upload"],
    liveUrl: "https://meme-generator-react-app.vercel.app/",
    githubUrl: "https://github.com/wesleyajavon/meme-generator-react-app",
    accentColor: "#EA580C",
    features: ["Meme Generation", "Image Upload", "Text Overlay", "Canvas Manipulation", "Download Functionality", "Responsive Design"],
    category: "Frontend",
    difficulty: "Easy",
    order: 8
  }
];

async function migrateProjects() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await connectDB();
    
    console.log('🗑️  Clearing existing projects...');
    await Project.deleteMany({});
    
    console.log('📝 Migrating projects...');
    for (const projectData of hardcodedProjects) {
      await Project.create(projectData);
      console.log(`✅ Created: ${projectData.title}`);
    }
    
    console.log('🎉 Projects migrated successfully!');
    console.log(`📊 Total projects: ${hardcodedProjects.length}`);
    
    // Vérifier les projets migrés
    const migratedProjects = await Project.find({}).sort({ order: 1 });
    console.log('📋 Migrated projects:');
    migratedProjects.forEach(project => {
      console.log(`  - ${project.title} (${project.category})`);
    });
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
  } finally {
    process.exit(0);
  }
}

// Exécuter la migration
migrateProjects();
