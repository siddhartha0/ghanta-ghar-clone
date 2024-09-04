import { forwardRef } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

interface props {
  date?: string;
  setDateValue: React.Dispatch<React.SetStateAction<string>>;
  defaultValue?: Date;
  closeDiv: React.Dispatch<React.SetStateAction<boolean>>;
}

const UseCalender = forwardRef<HTMLDivElement, props>(
  ({ date, setDateValue, defaultValue, closeDiv }, ref) => {
    return (
      <div ref={ref}>
        <Calendar
          value={date}
          className="w-60 lg:w-96 p-6 rounded-lg"
          onChange={(value) => {
            setDateValue(value?.toString().slice(0, 10) ?? "new date");
            closeDiv(false);
          }}
          defaultValue={defaultValue || new Date()}
        />
      </div>
    );
  }
);

export default UseCalender;
