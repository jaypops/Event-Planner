"use client"

import React, { createContext, useState, useEffect } from "react"

export const EventsContext = createContext(undefined)

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([])

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

  const createEvent = (event) => {
    const newEvent = {
      ...event,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    const updatedEvents = [...events, newEvent]
    setEvents(updatedEvents)
    localStorage.setItem("events", JSON.stringify(updatedEvents))
  }

  const updateEvent = (id, updates) => {
    const updatedEvents = events.map((event) => (event.id === id ? { ...event, ...updates } : event))
    setEvents(updatedEvents)
    localStorage.setItem("events", JSON.stringify(updatedEvents))
  }

  const deleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id)
    setEvents(updatedEvents)
    localStorage.setItem("events", JSON.stringify(updatedEvents))
  }

  const getUserEvents = (userId) => {
    return events.filter((event) => event.userId === userId)
  }

  const value = {
    events,
    createEvent,
    updateEvent,
    deleteEvent,
    getUserEvents,
  }

  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
}

export const useEvents = () => {
  const context = React.useContext(EventsContext)
  if (context === undefined) {
    throw new Error("useEvents must be used within EventsProvider")
  }
  return context
}
