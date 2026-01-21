// Help page component
import "../styles/Help.css";
import { CiClock1 } from "react-icons/ci";

export default function Help() {
  return (
    <div className="help-container">
      <div className="help-content">
        <header className="help-header">
          <h1>Help & Support</h1>
          <p className="help-sub">
            Everything you need to know about using Event Planner
          </p>
        </header>

        <section className="help-section">
          <h2>
            <span className="section-icon">
              <CiClock1 />
            </span>
            Navigation the App
          </h2>
          <div className="help-card">
            <h3>Main Navigation</h3>
            <ul className="help-list">
              <li>
                <strong>Home Page:</strong> The landing page where you can learn
                about the app and access login/register options.
              </li>
              <li>
                <strong>Events Page:</strong> View all your created events. Only
                accessible after logging in.
              </li>
              <li>
                <strong>Create Event:</strong> A form to add new events to your
                collection.
              </li>
              <li>
                <strong>Edit Event:</strong> Modify existing event details.
              </li>
              <li>
                <strong>Delete Event:</strong> Delete existing event.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
