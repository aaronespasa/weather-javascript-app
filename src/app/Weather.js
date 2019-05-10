/**
 * Request the weather data to the API
 */
export class Weather {

    constructor(city, countryCode) {
        this.apikey = '10fab0ad0e56042349fde4c3e6cb9269';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI); // fecth catches the json of the web
        const data = await response.json();
        return data;
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }

}