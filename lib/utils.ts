import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDescription(description: string): string {
  return description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}
