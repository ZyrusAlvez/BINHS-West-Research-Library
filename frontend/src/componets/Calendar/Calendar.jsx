import { useState } from "react";
import Model from "./Model"
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const Calendar = () => {
  // Get the current year and month for initial rendering
  const today = new Date();
  const yearNumber = today.getFullYear();
  const monthNumber = today.getMonth() + 1; // Months are zero-indexed

  const [month, setMonth] = useState(monthNumber);
  const [year, setYear] = useState(yearNumber);

  function next(){
    setMonth((m) => (m % 12) + 1)
    if (month === 12){
      setYear((y) => y + 1)
    }
  }

  function prev(){
    setMonth((m) => ((m - 1 + 12) % 12) || 12);
    if (month === 1){
      setYear((y) => y - 1)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <FaLessThan className="text-4xl cursor-pointer text-yellow-700" onClick={prev}/>
      <Model month={month} year={year}/>
      <FaGreaterThan className="text-4xl cursor-pointer text-yellow-700" onClick={next}/>
    </div>
  )
}

export default Calendar