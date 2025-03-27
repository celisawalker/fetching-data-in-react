const API_KEY = "5d2c9f4894c449b2a6a184310252703";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export { show }; //,+ named export syntax