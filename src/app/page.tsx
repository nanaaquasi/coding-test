"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [addedCities, setAddedCities] = useState([{ name: "", date: "" }]);
  const [formData, setFormData] = useState<any>({});

  const addUserData = async (e: any) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      dateOfBirth,
      addedCities,
    };

    setFormData(user);
    resetForm();
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setAddedCities([{ name: "", date: "" }]);
  };

  const setCityDate = (date: string, index: number) => {
    const newCities = [...addedCities];
    newCities[index].date = date;
    setAddedCities(newCities);
  };

  const setCityName = (name: string, index: number) => {
    const newCities = [...addedCities];
    newCities[index].name = name;
    setAddedCities(newCities);
  };

  const removeCity = (index: number) => {
    const newCities = [...addedCities];
    newCities.splice(index, 1);
    setAddedCities(newCities);
  };

  const isDataShown =
    formData?.firstName ||
    formData?.lastName ||
    formData?.dateOfBirth ||
    formData?.addedCities?.length > 0;

  return (
    <main className="flex min-h-screen items-center justify-start">
      <div className="ml-20 border w-2/4 bg-white p-10 rounded-xl my-auto border-x-neutral-200 pb-12">
        <h2 className="text-lg font-bold leading-7 text-gray-900">
          Personal Information
        </h2>
        <hr className="mt-2" />
        <div className="mt-6 mb-4  grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="first-name"
                id="first-name"
                placeholder="Enter first name.."
                autoComplete="given-name"
                className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="last-name"
              className="block text-sm mt-4 font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="last-name"
                placeholder="Enter last name.."
                id="last-name"
                autoComplete="family-name"
                className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm mt-4 font-medium leading-6 text-gray-900"
            >
              Date of Birth
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="date"
                autoComplete="email"
                className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
            Cities travelled
          </h2>
        </div>

        <hr className="mt-2" />

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 max-h-60 overflow-scroll sm:grid-cols-6">
          {addedCities.map((city, index) => (
            <div
              key={index}
              className="col-span-6 relative grid grid-cols-1 gap-x-6 gap-y-3 max-h-60 overflow-scroll sm:grid-cols-6"
            >
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date Arrived
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="first-name"
                    id="first-name"
                    value={city.date}
                    onChange={(e) => setCityDate(e.target.value, index)}
                    placeholder="Eg. John"
                    autoComplete="city-name"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="city-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city-name"
                    onChange={(e) => setCityName(e.target.value, index)}
                    value={city.name}
                    placeholder="Enter name of city.."
                    id="last-name"
                    autoComplete="city-name"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {addedCities?.length > 1 && (
                <button
                  onClick={() => removeCity}
                  type="button"
                  className="text-white text-xs absolute top-0 right-0 rounded-full bg-red-500 w-4 flex items-center justify-center h-4"
                >
                  x
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() =>
              setAddedCities([...addedCities, { name: "", date: "" }])
            }
            className="border mt-3 col-span-2 px-3 py-2 text-sm font-light text-black rounded-md shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add More
          </button>
        </div>
        <button
          type="submit"
          onClick={addUserData}
          className="rounded-md mt-5 w-full bg-black col-span-6 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600"
        >
          Submit
        </button>
      </div>
      {isDataShown && (
        <div className="ml-20 border w-1/4 bg-white p-5 rounded-xl my-auto border-x-neutral-200 pb-12">
          {/* display data in json format
           */}

          <div className="mt-5">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              JSON Data
            </h2>
            <hr className="mt-2" />
            <div className="mt-6 mb-4  grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
              <div className="sm:col-span-6 text-black">
                <pre>{JSON.stringify(formData, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
