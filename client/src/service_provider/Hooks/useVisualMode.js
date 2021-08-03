import { useState } from "react";

//custom hook to maintain mode and mode history for appointment component
export default function useVisualMode(defaultMode) {
  const [mode, setMode] = useState(defaultMode);
  const [history, setHistory] = useState([defaultMode]);

  //funtion to handle change of mode
  const transition = (newMode, replace = false) => {
    setMode(newMode);
    setHistory((prev) => {
      const updatedHistory = [...prev];
      if (replace) {
        updatedHistory.pop();
      }
      updatedHistory.push(newMode);
      return updatedHistory;
    });
  };

  //function to reverse mode to previous state
  const back = () => {
    if (history.length > 1) {
      setHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory.pop();
        setMode(updatedHistory[updatedHistory.length - 1]);
        return updatedHistory;
      });
    }
  };

  return { mode, transition, back };
}
