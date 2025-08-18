import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    trim: true,
    maxlength: [200, 'Short description cannot be more than 200 characters']
  },
  fullDescription: {
    type: String,
    required: [true, 'Full description is required'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Image URL is required']
  },
  gradient: {
    type: String,
    required: [true, 'Gradient is required']
  },
  technologies: [{
    type: String,
    required: [true, 'At least one technology is required']
  }],
  liveUrl: {
    type: String,
    validate: {
      validator: function(v: string) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Live URL must be a valid URL'
    }
  },
  githubUrl: {
    type: String,
    validate: {
      validator: function(v: string) {
        return !v || /^https?:\/\/github\.com\/.+/.test(v);
      },
      message: 'GitHub URL must be a valid GitHub URL'
    }
  },
  accentColor: {
    type: String,
    required: [true, 'Accent color is required'],
    validate: {
      validator: function(v: string) {
        return /^#[0-9A-F]{6}$/i.test(v);
      },
      message: 'Accent color must be a valid hex color'
    }
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'Other'],
    default: 'Other'
  },
  difficulty: {
    type: String,
    required: [true, 'Difficulty is required'],
    enum: ['Easy', 'Intermediate', 'Difficult'],
    default: 'Intermediate'
  },
  features: [{
    type: String,
    required: [true, 'At least one feature is required']
  }],
  isPublished: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index pour améliorer les performances
ProjectSchema.index({ category: 1, difficulty: 1 });
ProjectSchema.index({ isPublished: 1, order: 1 });

// Méthode statique pour récupérer les projets publiés
ProjectSchema.statics.getPublishedProjects = function() {
  return this.find({ isPublished: true }).sort({ order: 1, createdAt: -1 });
};

// Méthode pour obtenir le nombre de projets par catégorie
ProjectSchema.statics.getProjectsByCategory = function() {
  return this.aggregate([
    { $match: { isPublished: true } },
    { $group: { _id: '$category', count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]);
};

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default Project;
