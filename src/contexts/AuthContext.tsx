import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface FinancialDatum {
  label: string;
  value: number;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  financialData: FinancialDatum[];
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (userType: 'new' | 'old', name?: string, email?: string) => void;
  signup: (userType: 'new' | 'old', name: string, email: string) => void;
  logout: () => void;
}

const AUTH_STORAGE_KEY = 'finwise_auth_user';

const oldUserFinancialData: FinancialDatum[] = [
  { label: 'Stocks', value: 42000 },
  { label: 'ETFs', value: 21000 },
  { label: 'Bonds', value: 12000 },
  { label: 'Cash', value: 8500 },
];

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function readStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

function persistUser(user: AuthUser | null) {
  try {
    if (!user) {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      return;
    }
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } catch {
    // No-op for storage failures.
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setUser(readStoredUser());
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: !!user,
      login: (userType, name = 'FinWise User', email = 'user@finwise.app') => {
        const nextUser: AuthUser = {
          id: crypto.randomUUID(),
          name,
          email,
          financialData: userType === 'old' ? oldUserFinancialData : [],
        };
        setUser(nextUser);
        persistUser(nextUser);
      },
      signup: (userType, name, email) => {
        const nextUser: AuthUser = {
          id: crypto.randomUUID(),
          name,
          email,
          financialData: userType === 'old' ? oldUserFinancialData : [],
        };
        setUser(nextUser);
        persistUser(nextUser);
      },
      logout: () => {
        setUser(null);
        persistUser(null);
      },
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
