import { useState } from "react";

const WeatherSearch = (props) => {
    const [ city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchData(city)
        //TODO: call the service show function here
        //clear form input
        setCity("");
    
}

    return (
        <>
            <section>
                <h2>Search</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="city">Enter a city: </label>
                    <input 
                        type="text" 
                        id="city" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </section>
        </>
    )
}

export default WeatherSearch;