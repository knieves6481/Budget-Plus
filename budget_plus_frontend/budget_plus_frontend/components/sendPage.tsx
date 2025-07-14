// src/pages/CategoryPage.tsx
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../src/sendPage.css';

const numKeys = ['1','2','3','4','5','6','7','8','9','Clear','0','.'];

const SendPage = () => {
  const { name } = useParams<{ name: string }>();
  const [inputValue, setInputValue] = useState('');

  const handleClick = (key: string) => {
    if (key === 'Clear') {
      setInputValue('');
    } else {
      setInputValue(prev => prev + key);
    }
  };

  const handleSend = async () => {
    const payload = {
      category: name,
      price: parseFloat(inputValue),
      date: "N/A"
    };
    if(payload.price == 0.0 || payload.price == 0)
    {
        console.error()
        alert('Please input a price');
    }
    else
    {
       try 
        {
            await axios.post('http://localhost:8080/api/items', payload);
            alert('Sent successfully!');
            setInputValue('');
        } 

        catch (err) 
        {
            console.error(err);
            alert('Failed to send.');
        } 
    }
    
  };

  return (
    <div className="category-container">
      <h2>Category: {name}</h2>
      <div className="numpad">
        {numKeys.map(key => (
          <button
            key={key}
            className="numpad-btn"
            onClick={() => handleClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="display-value">${inputValue}</div>
      <button className="send-btn" onClick={handleSend}>Send</button>
    </div>
  );
};

export default SendPage;