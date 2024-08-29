
type WeatherItemProps = {
    stacja: string;
    temperatura: string;
    cisnienie: string;
}

const WeatherItem = (props: WeatherItemProps) => {
    return (
        <div className='weatherItem'>
            <h2>{props.stacja}</h2>
            <p>Temperatura: {props.temperatura} st. C.</p>
            <p>Ciśnienie: {props.cisnienie ? props.cisnienie + ' hPa' : ' brak danych'}</p>
        </div>
    )
}

export default WeatherItem;