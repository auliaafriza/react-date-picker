'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { format } from 'date-fns';
import {
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { cn } from '../../libs/utils';

export interface MonthPickerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  date?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setDate?: any;
  formatDate?: string;
  placeHolder?: string;
}

const MonthPicker: FC<MonthPickerProps> = ({
  date,
  setDate,
  formatDate,
  placeHolder,
}) => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const month = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'min-w-[200px] max-w-[600px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <div className="w-[5%]">
            <CalendarIcon className="mr-2 h-4 w-4" />
          </div>
          <div className="w-[90%]">
            {date ? (
              format(
                new Date(date.year, date.month + 1, 0),
                formatDate ? formatDate : 'MMM/yyyy',
              )
            ) : (
              <span>{placeHolder ? placeHolder : 'Pick a month'}</span>
            )}
          </div>
          <div className="w-[5%]">
            <ChevronDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="h-[250px] w-[300px] bg-white px-5">
          <div className="flew-row flex justify-between">
            <Button
              variant={'default'}
              className={cn(
                'w-[50px] justify-between text-left font-normal',
                !date && 'text-muted-foreground',
              )}
              onClick={() => setYear(year - 1)}
            >
              <ChevronLeft className="ml-1 h-5 w-5" />
            </Button>
            <span className="mt-2 text-center">{year}</span>
            <Button
              variant={'default'}
              className={cn(
                'w-[50px] justify-between text-left font-normal',
                !date && 'text-muted-foreground',
              )}
              onClick={() => setYear(year + 1)}
            >
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {month.map((item: any, index: number) => (
              <span
                key={index}
                className={`${
                  index === date?.month ? 'text-primary' : 'text-gray-800'
                } m-2 cursor-pointer hover:opacity-50`}
                onClick={() => {
                  setDate({ year: year, month: index });
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MonthPicker;
