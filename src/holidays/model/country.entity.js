export class Country {

    constructor(countryName = '', iso3166 = '', totalHolidays = 0, supportedLanguages = 0, uuid = '', flagUnicode = '') {
        this.countryName = countryName;
        this.iso3166 = iso3166;
        this.totalHolidays = totalHolidays;
        this.supportedLanguages = supportedLanguages;
        this.uuid = uuid;
        this.flagUnicode = flagUnicode;
    }
}