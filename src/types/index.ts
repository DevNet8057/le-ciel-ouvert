/* ============================
   TYPES GLOBAUX DU PROJET
   ============================ */

export interface WeddingEvent {
  id: string;
  date: string;
  day: string;
  title: string;
  time: string;
  location: string;
  address: string;
  mapsUrl: string;
  icon: string;
  description: string;
}

export interface Venue {
  name: string;
  role: string;
  address: string;
  mapsUrl: string;
}

export interface DressCodeColor {
  name: string;
  hex: string;
  label: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface RSVPFormData {
  prenom: string;
  nom: string;
  email?: string;
  phone?: string;
  presence: "oui" | "non";
  personnes: number;
  message?: string;
}

export interface ParticleConfig {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export interface StoryStep {
  id: number;
  year: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface VisionMissionItem {
  title: string;
  text: string;
  bibleRef: string;
  icon: string;
}

export interface VisionMission {
  vision: VisionMissionItem;
  mission: VisionMissionItem;
}
