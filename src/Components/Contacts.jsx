import React from 'react';
import ContactUserCard from './ContactUserCard';


const Contacts = () => {
    return (
            <li className = 'contacts' >
          <h1>Contacts</h1>
          <ContactUserCard />
          <ContactUserCard />
          <ContactUserCard />
          </li>
    );
}

export default Contacts;
