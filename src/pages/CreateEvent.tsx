"use client"

import type React from "react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useEvents } from "../context/EventsContext"
import { eventSchema, type EventFormData } from "../schemas/event"
import "../styles/event-form.css"

export const CreateEvent: React.FC = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { createEvent } = useEvents()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  })

  if (!user) {
    return <div className="loading-container">Loading...</div>
  }

  const onSubmit = (data: EventFormData) => {
    createEvent({
      ...data,
      userId: user.id,
    })
    navigate("/events")
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-icon">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="url(#icon-gradient)" />
            <path
              d="M24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14ZM24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24C31 27.866 27.866 31 24 31Z"
              fill="white"
            />
            <path
              d="M24 20V24H27"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="icon-gradient"
                x1="0"
                y1="0"
                x2="48"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#667eea" />
                <stop offset="1" stopColor="#764ba2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1>Create New Event</h1>
        <p className="form-subtitle">Fill in the details below to create your event</p>
        <form onSubmit={handleSubmit(onSubmit)} className="event-form">
          <div className="form-group">
            <label htmlFor="title">Event Title</label>
            <input
              id="title"
              type="text"
              placeholder="Birthday Party"
              autoComplete="off"
              {...register("title")}
            />
            {errors.title && <span className="error">{errors.title.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Describe your event..."
              rows={4}
              {...register("description")}
            />
            {errors.description && <span className="error">{errors.description.message}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                {...register("date")}
              />
              {errors.date && <span className="error">{errors.date.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                id="time"
                type="time"
                {...register("time")}
              />
              {errors.time && <span className="error">{errors.time.message}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              placeholder="123 Main St, City, State"
              autoComplete="street-address"
              {...register("location")}
            />
            {errors.location && <span className="error">{errors.location.message}</span>}
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => navigate("/events")} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
