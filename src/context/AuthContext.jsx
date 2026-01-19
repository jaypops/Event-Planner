"use client"

import React, { createContext, useState, useEffect } from "react"

export const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

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

  const login = async (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const foundUser = users.find((u) => u.email === email && u.password === password)

    if (!foundUser) {
      throw new Error("Invalid email or password")
    }

    setUser(foundUser)
    localStorage.setItem("user", JSON.stringify(foundUser))
  }

  const register = async (email, password, name) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const existingUser = users.find((u) => u.email === email)

    if (existingUser) {
      throw new Error("Email already registered")
    }

    const newUser = {
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

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
