<script>
import {Country} from "../model/country.entity.js";

export default {
  name: "country-item",

  props: {
    country: {
      type: Country,
      required: true
    }
  },

}
</script>

<template>

  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
      <h1>{{ country.countryName }}</h1>
    </template>
    <template #title>{{ country.iso3166 }}</template>
    <template #subtitle>{{ country.totalHolidays }}</template>
    <template #content>
      <p class="m-0">
        {{ country.supportedLanguages }} {{ country.uuid }} {{ country.flagUnicode }}
      </p>
    </template>
  </pv-card>

</template>

<style scoped>

</style>