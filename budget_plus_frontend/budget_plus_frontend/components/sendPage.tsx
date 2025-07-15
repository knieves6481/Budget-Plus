import axios from 'axios';
import Numpad from './Numpad';
import { useParams } from 'react-router-dom';


const SendPage = () => {
  const { name } = useParams<{ name?: string }>(); // optional param
  const category = name ?? 'Unknown'; // fallback to prevent crash

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
      <h2>{category}</h2>
      <Numpad onSend={handleSend} />
    </div>
  );
};

export default SendPage;