import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { EventsProvider } from "./context/EventsContext"
import { Navigation } from "./components/Navigation"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { EventList } from "./pages/EventList"
import { CreateEvent } from "./pages/CreateEvent"
import { EditEvent } from "./pages/EditEvent"
import "./styles/app.css"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EventsProvider>
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/events"
                element={
                  <ProtectedRoute>
                    <EventList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/events/create"
                element={
                  <ProtectedRoute>
                    <CreateEvent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/events/edit/:id"
                element={
                  <ProtectedRoute>
                    <EditEvent />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </EventsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
