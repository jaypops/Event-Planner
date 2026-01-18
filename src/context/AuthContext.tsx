"use client"

import React, { createContext, useState, useEffect } from "react"
import type { AuthContextType, User } from "../types/auth"

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user", error)
      }
    }
  }, [])

  const login = async (email: string, password: string): Promise<void> => {
    const users = JSON.parse(localStorage.getItem("users") || "[]") as User[]
    const foundUser = users.find((u) => u.email === email && u.password === password)

    if (!foundUser) {
      throw new Error("Invalid email or password")
    }

    setUser(foundUser)
    localStorage.setItem("user", JSON.stringify(foundUser))
  }

  const register = async (email: string, password: string, name: string): Promise<void> => {
    const users = JSON.parse(localStorage.getItem("users") || "[]") as User[]
    const existingUser = users.find((u) => u.email === email)

    if (existingUser) {
      throw new Error("Email already registered")
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      password,
      name,
    }

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
  }

  const logout = (): void => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
