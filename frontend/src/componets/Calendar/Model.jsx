import TopDesign from "./TopDesign";
import { getMonthName, getFirstDayOfMonth } from "./calendarFunctions";

const Model = ({day, month, year}) => {

  const daysInMonth = new Date(year, month, 0).getDate();
  const monthName = getMonthName(month)

  // getting today's date
  const today = new Date()
  const yearNumber = today.getFullYear();
  const monthNumber = today.getMonth() + 1;
  const dayNumber = today.getDate();

  return (
    <div className="w-[250px] bg-orange-100 z-10 rounded-2xl pb-4">
      <div className="w-full bg-orange-400 rounded-t-2xl">
        <TopDesign />
        <div className="text-orange-100 font-bold flex justify-between px-3 text-2xl mb-2">
          <h1>{monthName}</h1>
          <h1>{year}</h1>
        </div>
        <div className="h-[20px] bg-orange-500 grid grid-cols-7 text-center text-orange-100 text-[0.7rem] items-center">
          <h1>SUN</h1>
          <h1>MON</h1>
          <h1>TUE</h1>
          <h1>WED</h1>
          <h1>THU</h1>
          <h1>FRI</h1>
          <h1>SAT</h1>
        </div>
      </div>
      <div className="text-zinc-500 grid grid-cols-7 mt-2 text-sm font-semibold">
        {Array.from({ length: getFirstDayOfMonth(year, month)}, (_, i) => i + 1).map((e) => (
          <h1 key={e}></h1>
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((e) => (
          <h1
            key={e}
            className={`text-center ${
              e === dayNumber && month === monthNumber && year === yearNumber
              ? "bg-orange-500 rounded-full text-white mx-2" : ""
            }`}
          >
            {e}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Model;