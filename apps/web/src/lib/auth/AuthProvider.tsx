"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ApiClientError, authApi, clearToken, getToken, setToken, usersApi } from "@/lib/api/client";
import type { UserResponse } from "@/lib/api/types";

interface AuthContextValue {
  user: UserResponse | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setIsLoading(false);
      return;
    }
    usersApi
      .me()
      .then(setUser)
      .catch(() => clearToken())
      .finally(() => setIsLoading(false));
  }, []);

  async function login(email: string, password: string) {
    setError(null);
    try {
      const auth = await authApi.login(email, password);
      setToken(auth.accessToken);
      const me = await usersApi.me();
      setUser(me);
    } catch (err) {
      setError(err instanceof ApiClientError ? err.message : "Something went wrong. Try again.");
      throw err;
    }
  }

  async function register(email: string, password: string) {
    setError(null);
    try {
      const auth = await authApi.register(email, password);
      setToken(auth.accessToken);
      const me = await usersApi.me();
      setUser(me);
    } catch (err) {
      setError(err instanceof ApiClientError ? err.message : "Something went wrong. Try again.");
      throw err;
    }
  }

  function logout() {
    clearToken();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
