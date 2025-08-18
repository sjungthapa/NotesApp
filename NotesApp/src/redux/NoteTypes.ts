export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  category: 'personal' | 'work' | 'school';
   userId: string;
}