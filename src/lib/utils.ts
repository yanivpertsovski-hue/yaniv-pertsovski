import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string, locale: string = "en"): string {
  const date = new Date(dateStr + "-01");
  return date.toLocaleDateString(locale === "he" ? "he-IL" : "en-US", {
    year: "numeric",
    month: "long",
  });
}

export function formatFullDate(dateStr: string, locale: string = "en"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === "he" ? "he-IL" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}
