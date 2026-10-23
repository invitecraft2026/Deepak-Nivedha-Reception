/**
 * CENTRAL WEDDING CONFIGURATION
 * Every editable detail of the invitation lives here.
 * Replace the placeholder values below with the real wedding details.
 */

export type WeddingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  icon: "crescent" | "rings" | "lantern" | "dinner";
};

export const wedding = {
  bride: {
    firstName: "Nivedha",
    fullName: "Nivedha",
    /** TODO: add parents' names, e.g. "Daughter of Mr. ___ & Mrs. ___" */
    parents: "",
  },

  groom: {
    firstName: "Deepak",
    fullName: "Deepak",
    /** TODO: add parents' names, e.g. "Son of Mr. ___ & Mrs. ___" */
    parents: "",
  },

  initials: "N & D",

  /** Human readable date + time */
  date: "Sunday, 29 November 2026",

  dayName: "Sunday",
  dayNumber: "29",
  monthName: "November",
  year: "2026",

  time: "7:00 PM onwards",

  /** Used by countdown + calendar */
  dateISO: "2026-11-29T19:00:00",
  endISO: "2026-11-29T22:00:00",

  welcomeLine: "Together with our families",

  welcomeTitle: "Wedding Reception",

  welcomeJoin: "of",

  venue: {
    name: "Raj Mahal Marriage Hall",
    address:
      "No. 42 & 43, Ramamoorthi Avenue, Sakthi Nagar Main Rd, Porur, Chennai 600116",
    mapsQuery:
      "Raj Mahal Marriage Hall, Ramamoorthi Avenue, Sakthi Nagar Main Rd, Porur, Chennai 600116",
  },

  events: [
    {
      id: "reception",
      title: "Reception",
      date: "Sunday, 29 November 2026",
      time: "7:00 PM onwards",
      venue: "Raj Mahal Marriage Hall, Porur, Chennai",
      icon: "rings",
    },
  ] satisfies WeddingEvent[],

  /**
   * Photo collage. Put the photos in /public/gallery/ and list them here.
   * Leave src empty ("") to show a placeholder until the photos arrive.
   */
  gallery: [
    { src: "/coupleImages/image-1.jpg", alt: "Deepak & Nivedha" },
    { src: "/coupleImages/image-2.jpg", alt: "Deepak & Nivedha" },
    { src: "/coupleImages/image-3.jpg", alt: "Deepak & Nivedha" },
    { src: "/coupleImages/image-4.jpg", alt: "Deepak & Nivedha" },
    { src: "/coupleImages/image-5.jpg", alt: "Deepak & Nivedha" },
  ],

  invitationMessage:
    "With immense joy and gratitude, together with our families, we warmly invite you to the wedding reception of Deepak & Nivedha. Your presence and blessings will make our celebration complete.",

  quote: "Two souls, one heart, and a lifetime of togetherness.",

  guestInformation: [
    {
      title: "Arrival",
      body: "The reception begins at 7:00 PM. We kindly request our guests to join us at their earliest convenience to bless the couple.",
    },

    {
      title: "Dress Code",
      body: "Elegant traditional or semi-formal attire is warmly encouraged.",
    },

    {
      title: "Family",
      body: "Families and children are warmly welcome to join us in celebrating this beautiful occasion.",
    },

    {
      title: "Venue",
      body: "Raj Mahal Marriage Hall is on Sakthi Nagar Main Road, Porur, Chennai. Please plan your travel in advance.",
    },

    {
      title: "Blessings",
      body: "Join us in receiving the blessings of our elders and loved ones as we begin this new chapter.",
    },

    {
      title: "Gifts",
      body: "Your presence and blessings are the greatest gift we could ask for.",
    },
  ],

  /** Optional background music (add file path or URL, e.g. "/music/wedding.mp3") */
  musicSrc: "/A_thousand_Years.mp3",

  footer: {
    signOff: "With Love & Gratitude,",
    thanks:
      "We look forward to celebrating this beautiful beginning with you.",
  },
} as const;

export type Wedding = typeof wedding;