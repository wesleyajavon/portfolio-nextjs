import { useState, useEffect } from 'react';

export interface Project {
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
  category: string[];
  difficulty: string;
  features: string[];
  isPublished: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

interface UseProjectsOptions {
  category?: string;
  difficulty?: string;
  limit?: number;
}

interface UseProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  total: number;
  refetch: () => void;
}

export function useProjects(options: UseProjectsOptions = {}): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      // Construire l'URL avec les paramètres
      const params = new URLSearchParams();
      if (options.category) params.append('category', options.category);
      if (options.difficulty) params.append('difficulty', options.difficulty);
      if (options.limit) params.append('limit', options.limit.toString());

      const url = `/api/projects${params.toString() ? `?${params.toString()}` : ''}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setProjects(result.data);
        setTotal(result.total);
      } else {
        throw new Error(result.error || 'Failed to fetch projects');
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [options.category, options.difficulty, options.limit]);

  return {
    projects,
    loading,
    error,
    total,
    refetch: fetchProjects
  };
}

// Hook pour un projet spécifique
export function useProject(id: string) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/projects/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success) {
          setProject(result.data);
        } else {
          throw new Error(result.error || 'Failed to fetch project');
        }
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred';
        setError(errorMessage);
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  return { project, loading, error };
}
