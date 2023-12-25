import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full lg:w-4/12 p-5 border border-gray-300 bg-white bg-opacity-50 rounded-lg shadow-lg">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
            placeholder="Anthony"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Last name
          </label>
          <input
            type="text"
            id="last-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded0lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
            placeholder="Harold"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded0lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="department"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Department
          </label>
          <input
            type="text"
            id="department"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded0lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
            placeholder="Web Development"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded0lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
            placeholder="+90 (555)-555-5555"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-slate-300 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
