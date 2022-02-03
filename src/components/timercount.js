import React from "react";
function CounterTime() {
    const [Counter, setCounter] = React.useState(0);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setCounter(prevCount => prevCount + 1); 
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    },); 
    return (
      <>Count: {Counter}</>
    );
  }
 export default CounterTime;