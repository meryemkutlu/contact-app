import React from "react";

const ContactList = () => {
  return (
    <div className="w-full lg:w-6/12 p-5 mt-5 bg-white bg-opacity-50 shadow-lg rounded-lg ">
      <label className="w-full text-sm text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-opacity-80">
          <tr>
            <th scope="col" className="p-1">
              Full Name
            </th>
            <th scope="col" className="p-1">
              Department
            </th>
            <th scope="col" className="p-1">
              Phone Number
            </th>
            <th scope="col" className="p-1">
              Action
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr className="bg-white border-b bg-opacity-80 text-center hover:bg-gray-50">
            <th className="flex items-center p-1 font-medim text-gray-900 whitespance-nowrap">
              <div className="text-center w-full">
                <div className="text-base font-semibold">
                  first_name last_name
                </div>
                <div className="font-normal text-gray-500">email</div>
              </div>
            </th>
            <td className="p-1">department</td>
            <td className="p-1">phone</td>
            <td className="p-1">
              <i className="fa-solid fa-pen-nib text-2xl text-blue-300 pr-3 cursor-pointer"></i>
              <i className="fa-solid fa-trash text-2xl text-red-800 cursor-pointer"></i>
            </td>
          </tr>
        </tbody>
      </label>
    </div>
  );
};

export default ContactList;
