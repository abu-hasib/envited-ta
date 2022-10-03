import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { ImageBox } from "../components/ImageBox";

export const Create = ({ setEvent }) => {
  const [image, setImage] = useState([]);

  const navigate = useNavigate();
  return (
    <main className="flex px-8 flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-medium">Create an event</h1>
      <Formik
        initialValues={{ title: "", host: "", end: "", start: "" }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          values.image = image;
          navigate("/event", {
            state: {
              events: values,
            },
          });
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting }) => (
          <form className="w-full mt-6" onSubmit={handleSubmit}>
            <ImageBox {...{ image, setImage }} />
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Event name
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="event name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Host
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="host"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="event host"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="startTime"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Start
              </label>
              <input
                onChange={handleChange}
                type="datetime-local"
                id="startTime"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#E87BF8] block w-full p-2.5"
                placeholder="event host"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="endTime"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                End
              </label>
              <input
                onChange={handleChange}
                type="datetime-local"
                id="endTime"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="event host"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[#8456EC] hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Next
            </button>
          </form>
        )}
      </Formik>
    </main>
  );
};
