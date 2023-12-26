import React from "react";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  department: "",
  phone: "",
};

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [info, setInfo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, { ...info, id: new Date().getTime() }]);
    console.log(info);
  };

  return (
    <div className="block lg:flex p-3  gap-4">
      <ContactForm info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Home;
