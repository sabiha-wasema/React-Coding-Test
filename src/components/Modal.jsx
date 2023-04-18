import React, { useState, useEffect } from "react";

const Modal = props => {
  const [contacts, setContact] = useState({});
  //   useEffect(() => {
  //     fetch("https://contact.mediusware.com/api-doc/?format=openapi")
  //       .then(res => res.json())
  //       .then(data => setContact(data.info.contact));
  //   }, []);
  return (
    <div className="container">
      <form action="" className="form row gy-2 gx-3 align-items-center mb-4">
        <h1 className="text-center">Modal</h1>
        <div className="modal-body">
          <div className="d-flex me-4">
            <button>All Contacts</button>
            <button>US Contacts</button>
            <button>Close</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
