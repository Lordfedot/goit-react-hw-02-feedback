import { ButtonBox, Button } from "./styled/FeedbackOptions.styled";

const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return (
    <ButtonBox>
        {options.map((button,index) => {
           return(
           <Button key={index} type="button" onClick={()=>onLeaveFeedback(button)}>{button}</Button>) 
        })}
    </ButtonBox>)
}

export default FeedbackOptions