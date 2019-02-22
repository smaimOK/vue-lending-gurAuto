<template>
  <v-container fluid row ma-0 pa-0 class="sect pt-5 pb-5" style="background: url('static/background.png') repeat;" id="section6">

    <v-flex class="text-xs-center display-2 pb-3 font-weight-thin font-italic" dark ><h3 class="white--text">Контакты</h3></v-flex>

    <v-layout align-start justify-center column wrap>
      <v-flex style="width:100%;"><h1 class="text-xs-center" style="color: #e7eff6;">Россия, г.Томск, ул. Мусы Джалиля, д. 1/1</h1></v-flex>
      <v-flex style="width:100%;">
        <div id="mapp2"></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Section_6_contacts',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .sect {
    /*height: 500px;*/
  }
</style>
