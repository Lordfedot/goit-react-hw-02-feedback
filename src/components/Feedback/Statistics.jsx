

const Statistics = ({good, bad, neutral, total, positivePercentage }) => {
    return (
        <ul>
            <li><p>Good:{good}</p></li>
            <li><p>Neutral:{neutral}</p></li>
            <li><p>Bad:{bad}</p></li>
            <li><p>Total:{total}</p></li>
            <li><p>Posistive Feedback:{positivePercentage}%</p></li>
        </ul>
    )
} 

export default Statistics 
