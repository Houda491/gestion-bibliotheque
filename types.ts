export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  VISITOR = 'visitor'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  password?: string; // In a real app, this would be hashed
  registeredAt: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  coverUrl: string;
  totalCopies: number;
  availableCopies: number;
}

export interface Reservation {
  id: string;
  userId: string;
  bookId: string;
  date: string;
  status: 'active' | 'returned';
  bookTitle?: string; // For display convenience
  userName?: string; // For display convenience
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
