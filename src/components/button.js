import {Btn} from "./styles"
const Button = (props) =>{
    return(
     <>
        <Btn color="black">{props.ButtonText}</Btn><br/><br/>
        {/* <Btn color="Green">{props.ButtonText}</Btn> */}
        {/* <div>
            {
                <Loginbtn color="black">{props.Buttontype}</Loginbtn>
            }
        </div> */}
     </>
    )
}
export default Button;