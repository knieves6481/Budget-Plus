
import { Button, Row, Col } from 'antd';
import { useState } from 'react';

const numpadKeys = ['1','2','3','4','5','6','7','8','9','Clear','0','.'];

interface NumpadProps {
  onSend: (value: number) => void;
}

const Numpad: React.FC<NumpadProps> = ({ onSend }) => {
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
              danger={key === 'Clear'}
              onClick={() => handleClick(key)}
            >
              {key}
            </Button>
          </Col>
        ))}
      </Row>
      <div style={{ maxWidth: 80, margin: '0 auto', marginTop: '8px', textAlign: 'center' }}>
        <Button block type='primary' onClick={() => handleClick('Send')}>
              Send
            </Button>
      </div>
    </div>
  );
};

export default Numpad;