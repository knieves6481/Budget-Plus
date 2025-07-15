// src/components/Numpad.tsx
import { Button, Row, Col } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const numpadKeys = ['1','2','3','4','5','6','7','8','9','Clear','0','.','Send'];


interface NumpadProps {
  onSend: (value: number) => void;
}

const Numpad: React.FC<NumpadProps> = ({ onSend }) => {
    const { name } = useParams<{ name?: string }>(); // optional param
  const category = name ?? 'Unknown'; // fallback to prevent crash
  const [input, setInput] = useState('');

  const handleClick = (key: string) => {
    if (key === 'Clear') {
      setInput('');
    } else if (key === 'Send') {
      const numeric = parseFloat(input);
      if (!isNaN(numeric)) {
        onSend(numeric);
        setInput('');
      }
    } else {
      setInput(prev => prev + key);
    }
  };

  return (
    <div style={{ maxWidth: 240, margin: '0 auto', textAlign: 'center' }}>
      <div style={{ marginBottom: 10, fontSize: '1.5rem' }}>{input || '0'}</div>
      <Row gutter={[8, 8]}>
        {numpadKeys.map((key, index) => (
          <Col span={8} key={index}>
            <Button
              block
              type={key === 'Send' ? 'primary' : key === 'Clear' ? 'default' : 'default'}
              danger={key === 'Clear'}
              onClick={() => handleClick(key)}
            >
              {key}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Numpad;