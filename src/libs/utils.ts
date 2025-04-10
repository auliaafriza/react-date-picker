import { clsx, type ClassValue } from 'clsx';
import {
  format,
  isSameDay,
  isThisWeek,
  isThisYear,
  isToday,
  isYesterday,
} from 'date-fns';
import { id } from 'date-fns/locale';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertToInitials = (name: string): string => {
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

  return initials.substring(0, 2);
};

export function getGroupChatDate(date: Date) {
  if (isToday(date)) {
    return 'Hari ini';
  } else if (isYesterday(date)) {
    return 'Kemarin';
  } else if (isThisWeek(date)) {
    return format(date, 'iiii', { locale: id });
  } else if (isThisYear(date)) {
    return format(date, 'iii, d MMM', { locale: id });
  } else {
    return format(date, 'd MMM yyyy', { locale: id });
  }
}

export const formattedDateChat = (date: Date) => {
  return format(date, 'HH:mm', { locale: id });
};

export const formattedDateRoomChat = (date: Date) => {
  const now = new Date();

  if (isSameDay(date, now)) {
    return format(date, 'HH:mm', { locale: id });
  } else if (isThisYear(date)) {
    return format(date, 'd MMM', { locale: id });
  } else {
    return format(date, 'd MMM yyyy', { locale: id });
  }
};

/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {Date} value Value to return.
 * @param {Date} min Minimum return value.
 * @param {Date} max Maximum return value.
 * @returns {Date} Value between min and max.
 */
export function between<T extends Date>(
  value: T,
  min?: T | null,
  max?: T | null,
): T {
  if (min && min > value) {
    return min;
  }

  if (max && max < value) {
    return max;
  }

  return value;
}

function isValidNumber(num: unknown): num is number {
  return num !== null && num !== false && !Number.isNaN(Number(num));
}

export function safeMin(...args: unknown[]): number {
  return Math.min(...args.filter(isValidNumber));
}

export function safeMax(...args: unknown[]): number {
  return Math.max(...args.filter(isValidNumber));
}
