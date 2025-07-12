// this file will have more comments than usual, for my sake 

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Purchase } from '../src/types/purchase';
const apiUrl = import.meta.env.VITE_API_URL;

const Purchases = () => {       //declaring Purchases component
  const [items, setItems] = useState<Purchase[]>([]);       //declaring 2 variables, taking the purchase state and setting an array up with current state
  const [showUpdateNotice, setShowUpdateNotice] = useState(false);        //declaring update variables and setting state, used for the update message

      const fetchData = () => {       //defining fetchData method to update list
      axios.get<Purchase[]>(apiUrl)        //using axios dependency to send get request to java backend from path
        .then(response => {       //promise api utilized for try and catch section of data retrieval
          const newItems = response.data;        //newItems variable declared and defined as the response data from the get method

          if (JSON.stringify(newItems) !== JSON.stringify(items)) {       //stringify method takes the json data stored from the get method and turns it into a string 
            setItems(newItems);       //the whole if statement here compares new items -> old items on fetchData
            setShowUpdateNotice(true);//if theres a difference in the new vs old data, a update message is displayed
            setTimeout(() => setShowUpdateNotice(false), 3000);     //this hides the update message
          }
        })
        .catch(error => console.error("Error fetching items:", error));
    };

  useEffect(() => {       //useEffect is vital for data fetching and timer to function properly
    fetchData(); //initial fetch 
    const interval = setInterval(fetchData, 10000); //fetches every 10 seconds so web server is refreshed often
    return () => clearInterval(interval); 
  }, [items]);

  return (
    <div>
      <h2>Items</h2>

      {showUpdateNotice && (      //message for data updates
        <div style={{ backgroundColor: '#50b5bcff', padding: '8px', marginBottom: '10px' }}>
          Data updated!
        </div>
      )}

      <ul>
        {items.map(item => (       //displays data as bullet points
          <li key={item.id}>{item.category} (Cost: ${item.price})</li>
        ))}
      </ul>
    </div>
  );
};

export default Purchases;