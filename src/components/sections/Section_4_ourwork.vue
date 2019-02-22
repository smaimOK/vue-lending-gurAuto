<template>
  <v-container fluid row ma-0 pa-0 class="sect pt-5 pb-5" style="background: url('static/background.png') repeat;" id="section4">

    <v-flex class="text-xs-center display-2 pb-3 font-weight-thin font-italic" dark ><h3 class="white--text">Наши работы</h3></v-flex>

    <v-layout align-start justify-center row wrap>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src">
          </v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Section_4_ourwork',
  data () {
    return {
      items: [
        {src: '/static/1.jpg'},
        {src: '/static/2.jpg'},
        {
          src: '/static/3.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .sect {
    /*height: 500px;*/
  }
</style>
