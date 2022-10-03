import "./App.css";
import landing from "./assets/landing.png";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#DDDDDD]">
      <main className="py-8 grid place-items-center">
        <section className="text-center">
          <h1 className="font-bold text-6xl">
            Imagine if <span className="block text-[#E87BF8]">Snapchat</span>{" "}
            had events.
          </h1>
          <p className="text-[#4F4F4F]">
            Easily host and share events with your friends across any social
            media.
          </p>
        </section>

        <div>
          <img src={landing} alt="Landing" />
        </div>
        <Link
          to="create"
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          🎉 Create my event
        </Link>
      </main>
    </div>
  );
};

export default App;
