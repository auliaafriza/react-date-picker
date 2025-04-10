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
