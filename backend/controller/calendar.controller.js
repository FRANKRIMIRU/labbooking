import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3000"
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

export const addBookingToCalendar = async (req, res) => {
  const { name, email, date, testType } = req.body;

  const event = {
    summary: `Lab Test: ${testType}`,
    description: `Booked by ${name} (${email})`,
    start: {
      dateTime: new Date(date + "T09:00:00").toISOString(),
      timeZone: "Africa/Nairobi",
    },
    end: {
      dateTime: new Date(date + "T10:00:00").toISOString(),
      timeZone: "Africa/Nairobi",
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });
    res.status(200).json({ success: true, eventId: response.data.id });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
