# 📆 React + Capacitor: Calendar Event & Notification Guide

This guide will help you integrate **calendar event creation** and **local notifications** in a mobile app built with **React + Capacitor** using the **Cordova Calendar Plugin** and **Capacitor Local Notifications**.

---

## 📦 Prerequisites

Before starting, make sure you have the following set up:

- Capacitor integrated in your React app (`npx cap init`)
- Real Android/iOS device (some plugins do not work in browser preview)

---

## 🔌 Step 1: Install Plugins

### 🗓 Cordova Calendar Plugin
```bash
npm install cordova-plugin-calendar
```

### 🔔 Capacitor Local Notifications
```bash
npm install @capacitor/local-notifications
npx cap sync
```

> ✅ **Note:** Always run `npx cap sync` after installing plugins.

---

## 🔧 Step 2: Add Permissions (Android)

Edit your `android/app/src/main/AndroidManifest.xml` and add:

```xml
<uses-permission android:name="android.permission.READ_CALENDAR" />
<uses-permission android:name="android.permission.WRITE_CALENDAR" />
<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />
```

---

## 💻 Step 3: Calendar Event Code

```js
const addCalendarEvent = () => {
  if (!window.plugins || !window.plugins.calendar) {
    alert('Calendar plugin not available');
    return;
  }

  const title = 'Team Meeting';
  const startDate = new Date('2025-06-01T10:00:00');
  const endDate = new Date('2025-06-01T11:00:00');

  window.plugins.calendar.createEventInteractively(
    title,
    'My App Events',
    'Scheduled via app',
    startDate,
    endDate,
    () => alert('Event created successfully!'),
    (err) => alert('Error creating event: ' + err)
  );
};
```

> 🗓 This opens the native calendar UI to confirm the event.

---

## 🔔 Step 4: Local Notifications Code

```js
import { LocalNotifications } from '@capacitor/local-notifications';

const sendNotification = async () => {
  await LocalNotifications.requestPermissions();
  await LocalNotifications.schedule({
    notifications: [
      {
        title: 'Reminder',
        body: '⏰ Your scheduled time has arrived!',
        id: 1,
        schedule: { at: new Date(Date.now() + 1000) },
      },
    ],
  });
};
```

---

## 🧪 Testing Tips

- **Use a real device**: Emulator support may be limited.
- **Capacitor plugin errors**: Always run `npx cap sync` after installing new plugins.
- **Permissions issues**: Double-check app permissions in device settings.

---

## 📁 File Summary

| File            | Purpose                                  |
|-----------------|-------------------------------------------|
| `App.js`        | Main logic for UI, notifications, events |
| `AndroidManifest.xml` | Required for calendar plugin access |

---

## 📌 Final Notes

- This guide assumes you're using **ReactJS** with **CapacitorJS** only (no backend).
- For more advanced scheduling (e.g., recurring events), explore additional options in `cordova-plugin-calendar` docs.

---

## 🧠 Helpful Links

- [Capacitor Local Notifications](https://capacitorjs.com/docs/apis/local-notifications)
- [Cordova Calendar Plugin GitHub](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin)

Happy Coding! 🎉
