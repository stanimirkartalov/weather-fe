export function Day(props){
    const {dayOfWeek} = props; 
    return (<div className={"day-container"}>
        <div className={"day-title"}>{dayOfWeek}</div>
        <div className={"day-temperature"}>25C</div>
        <ul>
            <li>rain: 10l/m2</li>
            <li>pressure: 1010mPa</li>
            <li>lightness: 70%</li>
            <li>humidity: 30%</li>
        </ul>
        </div>)
}