<template>
  <v-container fluid row ma-0 pa-0 class="sect pt-5 pb-5" style="background: url('static/background.png') repeat;" id="section3">

    <v-flex class="text-xs-center display-2 pb-3 font-weight-thin font-italic" dark ><h3 class="white--text">Наши преимущества</h3></v-flex>
    <v-layout align-start justify-center row wrap>
      <v-card dark style="height:222px;" class="text-xs-center mx-2 my-2 px-2 py-2" color="rgb(0, 0, 0, 0.3)" v-for="list in lists" v-bind:key="list[0]">
        <v-icon x-large>{{list[1]}}</v-icon>
        <p v-html="list[0]">
        </p>
      </v-card>
    </v-layout>
    <v-layout align-start justify-center row wrap>
      <v-card dark style="height:180px;" class="text-xs-center mx-2 my-2 px-2 py-2" color="rgb(0, 0, 0, 0.3)" v-for="list in lists2" v-bind:key="list[0]">
        <v-icon x-large>{{list[1]}}</v-icon>
        <p v-html="list[0]">
        </p>
      </v-card>
    </v-layout>

    <v-layout justify-center mt-4>
      <v-flex xs11 md10 xl8>
       <stages-of-work>
       </stages-of-work>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import stagesOfWork from '@/components/sections/fragments/3_stagesOfWork'

export default {
  components: {
    stagesOfWork
  },
  name: 'Section_1_header',
  data () {
    return {
      lists: [
        [`Вежливые мастера<br>
          Мы с уважением относимся<br>
          к нашим клиентам<br>
          и всегда рассказываем<br>
          о все деталях ремонта<br>`, 'favorite_border'],
        [`Покажим что не так<br>
          Ниши мастера покажут<br>
          И подробно расскажут,<br>
          в чем неисправшность<br>
          вашего авто,<br>
          а так же обозначат<br>
          срочность ремонта<br>`, 'help_outline']
      ],
      lists2: [
        [`Бесплатная диагностика<br>
          Для обнаружения неисправности<br>
          первоначально<br>
          проводится диагностика<br>`, 'grade'],
        [`Быстрый ремонт<br>
          Ремонт в течении<br>
          суток`, 'access_time'],
        [`Гарантия качества<br>
          Гарантия на ремонт<br>
          авто любой марки<br>
          От 6 до 12 месяцев!`, 'done_outline'],
        [`Опыт сотрудников<br>
          Наши сотрудники<br>
          занимаются<br>
          Ремонтом авто<br>
          уже 8 лут!`, 'supervisor_account']
      ],
      lists3: [
        ['передних колёс (сход развал)', 'от 1200 руб'],
        ['Замена амортизаторов, пружин, торсионов', 'от 550 руб'],
        ['Замена сайлентблоков', 'от 550 руб'],
        ['Замена шаровых опор', 'от 700 руб'],
        ['Замена рулевых реек', 'от 3 000 руб'],
        ['Замена рулевых наконечников', 'от 500 руб'],
        ['Замена стоек стабилизаторов', 'от 400 руб']
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
