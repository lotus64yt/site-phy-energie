export interface EnergyStep {
  name: string;
  type: 'source' | 'transformation' | 'transmission' | 'utilization';
  icon: string;
  description?: string;
}

export interface EnergyChain {
  id: string;
  title: string;
  description: string;
  steps: EnergyStep[];
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'quiz' | 'diagram' | 'calculation';
  questions?: Question[];
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank';
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
}

export interface CourseSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: string;
  examples?: EnergyChain[];
  exercises?: Exercise[];
}