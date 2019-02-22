<template>
    <v-container fluid ma-0 pa-0 style="height:335px;">
      <v-parallax
        src="static/automoive-slide-1.jpg"
        height="400"
        gradient="to top right, rgba(100,115,201,1), rgba(25,32,72,.7)">
          <v-layout align-start justify-center row wrap class="sect">
          <v-flex xs12 md6 text-xs-center text-md-left>
            <h2>
              Наша профессионайльная<br>
              Команда решит любые<br>
              ваши Проблемы<br>
              Звоните: +7 (952) 157-87-51
            </h2>
          </v-flex>
          <v-flex xs12 md6 text-xs-center>
            <h2>Наше местоположение:</h2>
            <h2>Г.Томск, ул. Мусы джалиля, д 1/1</h2>
          </v-flex>
        </v-layout>
      </v-parallax>
    </v-container>
</template>

<script>
export default {
  name: 'Section_1_header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.sect {
  padding-top: 70px;
  height:400;
}
</style>
