export function Day(props){
    const {timestamp, temperature, lightness, athmosphericPreasure, humidity, first} = props;
    return (<div className={"day-container"}>
        <div className={"day-title"}>{timestamp}</div>
        <div className={"day-temperature"}>{temperature}C</div>
        <ul>
            <li>pressure: {athmosphericPreasure}mPa</li>
            {first? <>
                <li>lightness: {Math.ceil(lightness/1024*100)}%</li>
                <li>humidity: {humidity}%</li>
            </> : null }
        </ul>
        </div>)
}