import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function truncateText(text: string, length: number) {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
