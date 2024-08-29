
type SearchWeatherProps = {
    filterWeather: (searchValue: string) => void
}

const SearchWeather = (props: SearchWeatherProps) => {
    return (
        <div className="searchWeather">
            <form>
                <label htmlFor="searchWeather">Szukaj : </label>
                <input type="text" id="searchWeather" onChange={(e)=>props.filterWeather(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchWeather;