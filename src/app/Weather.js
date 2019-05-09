/**
 * Request the weather data to the API
 */
export class Weather {

    constructor(city, countryCode) {
        this.apikey = '10fab0ad0e56042349fde4c3e6cb9269';
        this.city = city;
        this.countryCode = countryCode;
    }

    getWeather() {

    }

}