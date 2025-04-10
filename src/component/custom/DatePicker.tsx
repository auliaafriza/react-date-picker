'use client';

import type { FC } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '../../libs/utils';

export interface DatePickerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  date?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setDate?: any;
  formatDate?: string;
  placeHolder?: string;
}

const DatePicker: FC<DatePickerProps> = ({
  date,
  setDate,
  formatDate,
  placeHolder,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'min-w-[200px] max-w-[600px] border-inherit text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <div className="w-[5%]">
            <CalendarIcon className="mr-2 h-4 w-4" />
          </div>
          <div className="w-[90%]">
            {date ? (
              format(date, formatDate ? formatDate : 'PPP')
            ) : (
              <span>{placeHolder ? placeHolder : 'Pick a date'}</span>
            )}
          </div>
          <div className="w-[5%]">
            <ChevronDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
