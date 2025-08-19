import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Project from '@/lib/models/Project';
import { Error as MongooseError } from 'mongoose';

// Types pour les erreurs
interface ValidationError extends MongooseError.ValidationError {
  errors: Record<string, MongooseError.ValidatorError>;
}

interface ValidatorError extends MongooseError.ValidatorError {
  message: string;
}

// Type pour le filtre de requête
interface ProjectFilter {
  isPublished: boolean;
  category?: string;
  difficulty?: string;
}

// GET - Récupérer tous les projets
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    // Récupérer les paramètres de requête
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    // Construire le filtre
    const filter: ProjectFilter = { isPublished: true };
    
    if (category) {
      filter.category = category;
    }
    
    if (difficulty) {
      filter.difficulty = difficulty;
    }
    
    // Récupérer les projets avec pagination
    const projects = await Project.find(filter)
      .sort({ order: 1, createdAt: -1 })
      .limit(limit)
      .lean();
    
    // Compter le total pour la pagination
    const total = await Project.countDocuments(filter);
    
    return NextResponse.json({
      success: true,
      data: projects,
      total,
      limit
    });
    
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST - Créer un nouveau projet
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    // Validation des données requises
    const requiredFields = ['title', 'shortDescription', 'fullDescription', 'image', 'gradient', 'technologies', 'accentColor', 'category', 'difficulty', 'features'];
    
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `${field} is required` },
          { status: 400 }
        );
      }
    }
    
    // Créer le projet
    const project = await Project.create(body);
    
    return NextResponse.json({
      success: true,
      data: project
    }, { status: 201 });
    
  } catch (error: unknown) {
    console.error('Error creating project:', error);
    
    // Gérer les erreurs de validation Mongoose
    if (error instanceof Error && error.name === 'ValidationError') {
      const validationError = error as ValidationError;
      const validationErrors = Object.values(validationError.errors).map((err: ValidatorError) => err.message);
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
