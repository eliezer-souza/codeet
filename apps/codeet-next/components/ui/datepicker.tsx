import { format } from 'date-fns';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { cn } from '../../lib/cn';

type DatePickerProps = ReactDatePickerProps;

export default function DatePicker({ className, ...props }: DatePickerProps) {
  return (
    <ReactDatePicker
      {...props}
      selectsStart
      showTimeSelect
      dateFormat="dd MMMM yyyy hh:mm:ss"
      nextMonthButtonLabel=">"
      previousMonthButtonLabel="<"
      popperClassName="react-datepicker-left"
      className={cn(
        'text-lg w-full p-4 max-w-lg h-11 placeholder:text-slate-400 text-slate-400 outline-none truncate border border-slate-300 bg-white rounded-md hover:border-slate-400 relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        className
      )}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="flex items-center justify-between px-2 py-2">
          <span className="text-lg text-gray-700">
            {format(date, 'MMMM yyyy')}
          </span>
          <div className="space-x-2">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              type="button"
              className={cn(
                'inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary',
                {
                  ['cursor-not-allowed opacity-50']: prevMonthButtonDisabled,
                }
              )}
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              type="button"
              className={cn(
                'inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary',
                {
                  ['cursor-not-allowed opacity-50']: nextMonthButtonDisabled,
                }
              )}
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      )}
    />
  );
}
