<template>
  <div id=app>
    <v-app>
      <page-header />
      <section1 />
      <section2 />
      <section3 />
      <section4 />
      <section5 />
      <Section6 />
      <Section7 />
      <page-footer />
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header'
import PageFooter from '@/components/Footer'
import Section1 from '@/components/sections/Section_1_header'
import Section2 from '@/components/sections/Section_2_price'
import Section3 from '@/components/sections/Section_3_advant'
import Section4 from '@/components/sections/Section_4_ourwork'
import Section5 from '@/components/sections/Section_5_reviews'
import Section6 from '@/components/sections/Section_6_contacts'
import Section7 from '@/components/sections/Section_7_backAnswer'

export default {
  name: 'HelloWorld',
  components: {
    PageHeader,
    PageFooter,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
