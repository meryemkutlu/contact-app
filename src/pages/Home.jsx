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
    if (info.id) {
      setContacts(contacts.map((item) => (item.id === info.id ? info : item)));
    } else {
      setContacts([...contacts, { ...info, id: new Date().getTime() }]);
    }
    console.log(info);
    setInfo(initialState);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((item) => item.id !== id));
  };
  return (
    <div className="block lg:flex p-3  gap-4">
      <ContactForm info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      <ContactList
        contacts={contacts}
        setInfo={setInfo}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
