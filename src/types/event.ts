export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  userId: string
  createdAt: string
}

export interface EventsContextType {
  events: Event[]
  createEvent: (event: Omit<Event, "id" | "createdAt">) => void
  updateEvent: (id: string, event: Partial<Event>) => void
  deleteEvent: (id: string) => void
  getUserEvents: (userId: string) => Event[]
}
