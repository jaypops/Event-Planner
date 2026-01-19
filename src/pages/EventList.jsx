"use client";

import { useAuth } from "../context/AuthContext";
import { useEvents } from "../context/EventsContext";
import { Link } from "react-router-dom";
import "../styles/events.css";

export const EventList = () => {
  const { user } = useAuth();
  const { getUserEvents, deleteEvent } = useEvents();

  if (!user) {
    return <div className="loading-container">Loading...</div>;
  }

  const userEvents = getUserEvents(user.id);

  const fullName = user.name.split(" ");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <div className="header-content">
          <h1>Welcome, {fullName[0]}!</h1>
          <p>
            {userEvents.length === 0
              ? "You don't have any events yet."
              : `You have ${userEvents.length} event${userEvents.length === 1 ? "" : "s"}.`}
          </p>
        </div>
        <Link to="/events/create" className="btn btn-primary">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "0.5rem" }}
          >
            <path
              d="M10 4V16M4 10H16"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Create Event
        </Link>
      </div>

      {userEvents.length === 0 ? (
        <div className="empty-state">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginBottom: "1.5rem", opacity: "0.5" }}
          >
            <circle cx="40" cy="40" r="40" fill="url(#empty-gradient)" />
            <path
              d="M40 24C31.1634 24 24 31.1634 24 40C24 48.8366 31.1634 56 40 56C48.8366 56 56 48.8366 56 40C56 31.1634 48.8366 24 40 24ZM40 52C33.3726 52 28 46.6274 28 40C28 33.3726 33.3726 28 40 28C46.6274 28 52 33.3726 52 40C52 46.6274 46.6274 52 40 52Z"
              fill="white"
            />
            <path
              d="M40 34V40H44"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="empty-gradient"
                x1="0"
                y1="0"
                x2="80"
                y2="80"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#667eea" />
                <stop offset="1" stopColor="#764ba2" />
              </linearGradient>
            </defs>
          </svg>
          <p>No events yet. Create your first event!</p>
          <Link to="/events/create" className="btn btn-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "0.5rem" }}
            >
              <path
                d="M10 4V16M4 10H16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Create Event
          </Link>
        </div>
      ) : (
        <div className="events-grid">
          {userEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-card-header">
                <h2>{event.title}</h2>
                <div className="event-actions">
                  <Link
                    to={`/events/edit/${event.id}`}
                    className="btn btn-secondary btn-sm"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "0.25rem" }}
                    >
                      <path
                        d="M2.66667 12.6667H13.3333M11.3333 4.66667L12.6667 6M3.33333 12.6667L10.6667 5.33333C11.0203 4.97971 11.0203 4.42029 10.6667 4.06667L9.93333 3.33333C9.57971 2.97971 9.02029 2.97971 8.66667 3.33333L1.33333 10.6667V12.6667H3.33333Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="btn btn-danger btn-sm"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "0.25rem" }}
                    >
                      <path
                        d="M2.66667 4H13.3333M5.33333 4V2.66667C5.33333 2.29848 5.63181 2 6 2H10C10.3682 2 10.6667 2.29848 10.6667 2.66667V4M3.33333 4L4 13.3333C4 13.7015 4.29848 14 4.66667 14H11.3333C11.7015 14 12 13.7015 12 13.3333L12.6667 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
              <p className="event-description">{event.description}</p>
              <div className="event-details">
                <div className="event-detail">
                  <span className="label">Date</span>
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="event-detail">
                  <span className="label">Time</span>
                  <span>{event.time}</span>
                </div>
                <div className="event-detail">
                  <span className="label">Location</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
