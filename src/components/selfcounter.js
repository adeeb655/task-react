import React from "react";
import {Myp} from "./styles"
const Selfcounter = () => {
const [state, setState] = React.useState({ num: 0 });
const counter = React.useRef(0);
React.useEffect(() => {
if (counter.current < 20){
counter.current += 1;
const timer = setTimeout(() => setState({ num: state.num + 1 }), 1000);
return () => clearTimeout(timer); 
}
if (counter.current > 0){
counter.current -= 0;
const timer = setTimeout(() => setState({ num: state.num - 1 }), 1000);
}
}, [state]);
return (
<div>
<Myp>{state.num}</Myp>
</div>
);
};
export default Selfcounter;