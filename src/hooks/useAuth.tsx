
import { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile } from '@/types/user';

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (userData: Partial<UserProfile>) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithProvider: (provider: 'google' | 'linkedin') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Initialize Supabase auth listener
    // This will be implemented once Supabase is connected
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    // TODO: Implement Supabase sign in
    console.log('Sign in with:', email);
  };

  const signUp = async (userData: Partial<UserProfile>) => {
    // TODO: Implement Supabase sign up with profile creation
    console.log('Sign up with:', userData);
  };

  const signOut = async () => {
    // TODO: Implement Supabase sign out
    setUser(null);
  };

  const signInWithProvider = async (provider: 'google' | 'linkedin') => {
    // TODO: Implement OAuth sign in
    console.log('Sign in with provider:', provider);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
      signUp,
      signOut,
      signInWithProvider
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
