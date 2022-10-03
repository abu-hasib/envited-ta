import cake from "../assets/cake.png";
import calendar from "../assets/calendar.svg";
import location from "../assets/location.svg";
import { useLocation } from "react-router-dom";

export const Events = () => {
  const {
    state: { events },
  } = useLocation();

  return (
    <main>
      <div>
        <img src={cake} alt="" />
      </div>
      <div className="px-6 py-6">
        <h1 className="font-bold text-5xl text-[#240D57]">{events.title}</h1>
        <h3 className="text-[#828282] font-bold">
          Hosted by
          <span> {events.host}</span>
        </h3>
        <div className="flex items-center my-4 ">
          <div className="grid place-items-center h-12 w-12 bg-white shadow-md mr-4 rounded-lg">
            <img src={calendar} alt="calendar" />
          </div>
          <div>
            <p className="text-[#240D57] font-bold">
              {new Date(events.startTime).toLocaleString()}
            </p>
            <p>to {new Date(events.endTime).toGMTString()}</p>
          </div>
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.56763 1L8.56763 8L1.56763 15"
              stroke="#BDBDBD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex items-center">
          <div className="grid place-items-center h-12 w-12 bg-white shadow-md mr-4 rounded-lg">
            <img src={location} alt="location" />
          </div>
          <div className="">
            <h4 className="text-[#240D57] font-bold">Street name</h4>
            <p className="text-[#4F4F4F]">Suburb, State, Postcode</p>
          </div>
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.56763 1L8.56763 8L1.56763 15"
              stroke="#BDBDBD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </main>
  );
};
