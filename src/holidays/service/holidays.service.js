import axios from 'axios';
import { Country } from "../model/country.entity.js";

const http = axios.create({ baseURL: 'https://calendarific.com/api/v2'});
const COUNTRY_API_KEY = import.meta.env.VITE_HOLIDAYS_API_KEY;

export class HolidaysApiService {
    apiKey = COUNTRY_API_KEY;

    getHolidaysByCountry() {
        return http.get(`/countries?api_key=${this.apiKey}`)
    }
}