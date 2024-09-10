<script>
import { HolidaysApiService } from "./holidays/service/holidays.service.js";
import { Country } from "./holidays/model/country.entity.js";

import countryList from "./holidays/components/country-list.component.vue";
import toolbarContent from "./public/components/toolbar.component.vue";
import footerContent from "./public/components/footer.component.vue";

export default {

  components: {
    toolbarContent,
    footerContent,
    countryList
  },

  data() {
    return {
      countries: [],
      holidaysApi: new HolidaysApiService()
    };
  },

  methods: {

    buildCountryFromApiResponse(countries) {
      console.log("API response ", countries);
      return countries.map(country => new Country(
          country.country_name,
          country.iso_3166,
          country.total_holidays,
          country.supported_languages,
          country.uuid,
          country.flag_unicode
      ));
    },

    getCountries() {
      this.holidaysApi.getHolidaysByCountry()
          .then(response => {
            //console.log('Response data: ', response.data.response.countries);
            const countries = response.data.response.countries;

            if (Array.isArray(countries)) {
              this.countries = this.buildCountryFromApiResponse(countries);
            } else{
              console.error('La respuesta no contiene un array de países');
            }

          })
          .catch(error => {
            console.error(error);
          });
    }

  },

  created() {
    this.getCountries();
  }
}

</script>

<template>
  <toolbarContent/>
  <countryList :countries="this.countries"/>
  <footerContent/>
</template>

<style scoped>

</style>
