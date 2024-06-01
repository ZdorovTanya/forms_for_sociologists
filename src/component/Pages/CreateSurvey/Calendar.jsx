import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


export default function Calendar1() {
  const [value, onChange] = useState (new Date());

  return (
    <div>
      <Calendar className='rounded-xl' onChange={onChange} value={value} />
      {value.toString()}
    </div>
  );
}
