import axios from 'axios';
import Numpad from './numpad.tsx';
import { useParams } from 'react-router-dom';

function capitalizeFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const SendPage = () => {
  const { name } = useParams<{ name?: string }>(); 
  const category = name ?? 'Unknown'; 

  const handleSend = async (amount: number) => {
    const payload = {
      category: category,
      price: amount,
      date: "N/A"
    };
    
       try 
        {
            await axios.post('http://localhost:8080/api/items', payload);
            alert('Sent successfully!');
        } 

        catch (err) 
        {
            console.error(err);
            alert('Failed to send.');
        } 
    }
    



  return (
    <div>
      <h2>{capitalizeFirst(category)}</h2>
      <Numpad onSend={handleSend} />
    </div>
  );
};

export default SendPage;