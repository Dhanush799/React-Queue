import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InputComponent from './components/InputComponent';
import ViewComponent from './components/ViewComponent';
import FinalViewComponent from './components/FinalViewComponent';
import "./App.css"
function App() {
    // State for managing the queue and other data
    const [inputText, setInputText] = useState('');
    const [queue, setQueue] = useState([]);
    const [finalViewData, setFinalViewData] = useState([]);
    const [successPopup, setSuccessPopup] = useState(false);
  
    // Function to handle text input and queue management
    const handleAddText = () => {
      if (inputText.trim() !== '') {
        setQueue((prevQueue) => [...prevQueue, inputText]);
        setInputText('');
      }
    };
  
    // Function to poll the queue every 10 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        if (queue.length > 0) {
          const polledItem = queue.shift();
          setFinalViewData((prevData) => [...prevData, polledItem]);
        }
      }, 10000);
  
      return () => clearInterval(interval);
    }, [queue]);
  
    // Function to handle end button click
    const handleEnd = () => {
      if (queue.length === 0) {
        setSuccessPopup(true);
      } else {
        const waitForQueueEmpty = setInterval(() => {
          if (queue.length === 0) {
            clearInterval(waitForQueueEmpty);
            setSuccessPopup(true);
          }
        }, 1000);
      }
    };
  
    // Function to handle reset button click
    const handleReset = () => {
      setQueue([]);
      setFinalViewData([]);
      setSuccessPopup(false);
    };
  
    return (
      <div className="App">
        <Header />
        <div>
          <InputComponent
            inputText={inputText}
            setInputText={setInputText}
            handleAddText={handleAddText}
          />
          <ViewComponent queue={queue} />
        </div>
        <div>
          <FinalViewComponent finalViewData={finalViewData} />
          {successPopup && (
            <div className="success-popup">
              <p className='pop-msg'>Queue is empty.</p>
              <button className='popup-btn' onClick={() => setSuccessPopup(false)}>Close</button>
            </div>
          )}
          <div className="end-reset-buttons">
            <button onClick={handleEnd}>End</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
  
export default App;