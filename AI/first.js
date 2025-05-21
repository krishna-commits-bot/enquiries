import './App.css';
import React, { useState, useEffect } from 'react';
import { LocalNotifications } from '@capacitor/local-notifications';

function App() {
  const [notificationTime, setNotificationTime] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  // Add Event to Calendar
  const addCalendarEvent = () => {
    if (!window.plugins || !window.plugins.calendar) {
      alert('Calendar plugin not available. Please run this on a device.');
      return;
    }

    if (!title || !date) {
      alert('Please provide a title and a valid date/time.');
      return;
    }

    const startDate = new Date(date);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour later

    window.plugins.calendar.createEventInteractively(
      title,
      'App Event',
      'Created from React + Capacitor App',
      startDate,
      endDate,
      () => alert('✅ Event created successfully!'),
      (err) => alert('❌ Error creating event: ' + err)
    );
  };

  // Notification for Specific Time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toTimeString().slice(0, 5); // HH:MM format
      if (notificationTime === now) {
        sendNotification();
        clearInterval(interval); // Stop after triggering once
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [notificationTime]);

  const sendNotification = async () => {
    await LocalNotifications.requestPermissions();
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Reminder',
          body: '⏰ Your scheduled time has been reached!',
          id: 1,
          schedule: { at: new Date(Date.now() + 100) },
        },
      ],
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📆 Calendar & Notification App</h1>

      <label style={styles.label}>Set Notification Time:</label>
      <input type="time" style={styles.input} onChange={(e) => setNotificationTime(e.target.value)} />

      <hr />

      <label style={styles.label}>Event Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Meeting with team"
        style={styles.input}
      />

      <label style={styles.label}>Event Date & Time:</label>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={styles.input}
      />

      <button onClick={addCalendarEvent} style={styles.button}>➕ Add Event to Calendar</button>
    </div>
  );
}

const styles = {
  container: {
    padding: 24,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    marginTop: 8,
    marginBottom: 12,
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 16,
  },
};

export default App;
