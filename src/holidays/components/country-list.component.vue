<script>
import CountryItem from './country-item.component.vue'

export default {
  name: "country-list",

  components: {
    CountryItem
  },

  props: {
    countries: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>

  <div v-if="countries.length">
    <div v-for="country in countries" >
      <country-item :country="country" :key="country.uuid"/>
    </div>
  </div>

  <div v-else>
    <p>No countries available.</p>
  </div>

</template>

<style scoped>

</style>