"use client"

import React, { createContext, useState, useEffect } from "react"
import type { EventsContextType, Event } from "../types/event"

export const EventsContext = createContext<EventsContextType | undefined>(undefined)

export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const storedEvents = localStorage.getItem("events")
    if (storedEvents) {
      try {
        setEvents(JSON.parse(storedEvents))
      } catch (error) {
        console.error("Failed to parse stored events", error)
      }
    }
  }, [])

  const createEvent = (event: Omit<Event, "id" | "createdAt">): void => {
    const newEvent: Event = {
      ...event,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    const updatedEvents = [...events, newEvent]
    setEvents(updatedEvents)
    localStorage.setItem("events", JSON.stringify(updatedEvents))
  }

  const updateEvent = (id: string, updates: Partial<Event>): void => {
    const updatedEvents = events.map((event) => (event.id === id ? { ...event, ...updates } : event))
    setEvents(updatedEvents)
    localStorage.setItem("events", JSON.stringify(updatedEvents))
  }

  const deleteEvent = (id: string): void => {
    const updatedEvents = events.filter((event) => event.id !== id)
    setEvents(updatedEvents)
    localStorage.setItem("events", JSON.stringify(updatedEvents))
  }

  const getUserEvents = (userId: string): Event[] => {
    return events.filter((event) => event.userId === userId)
  }

  const value: EventsContextType = {
    events,
    createEvent,
    updateEvent,
    deleteEvent,
    getUserEvents,
  }

  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
}

export const useEvents = (): EventsContextType => {
  const context = React.useContext(EventsContext)
  if (context === undefined) {
    throw new Error("useEvents must be used within EventsProvider")
  }
  return context
}
