<script>
import countryItem from './country-item.component.vue'

export default {
  name: "country-list",

  components: {
    countryItem
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
      <countryItem :country="country" :key="country.uuid"/>
    </div>
  </div>

  <div v-else>
    <p>No countries available.</p>
  </div>

</template>

<style scoped>

</style>