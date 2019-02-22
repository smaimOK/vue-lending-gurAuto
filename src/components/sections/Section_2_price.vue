<template>
  <v-container fluid row ma-0 pa-0 class="sect pt-5 pb-5" style="background: url('static/background.png') repeat;" id="section2">

    <v-flex class="text-xs-center display-2 pb-3 font-weight-thin font-italic" dark ><h3 class="white--text">Наш прайс-лист!</h3></v-flex>

    <v-layout align-start justify-center row wrap>
      <v-card tile class="pl-2 pt-2 mr-2" color="rgb(0, 188, 212, 0.3)" dark>
        <h2>Техническое обслуживание</h2>
        <v-layout align-center row v-for="list in lists" v-bind:key="list[0]">
          <v-flex xs8>{{list[0]}}</v-flex>
          <v-flex xs3>
            <v-flex class="text-lg-left" justify-end>{{list[1]}}</v-flex>
          </v-flex>
        </v-layout>
      </v-card>

      <v-card class="pl-2 pr-2 pt-2 ml-2 mt-2 mr-2" color="rgb(0, 188, 212, 0.3)" dark>
        <h2>Ремонт и обслуживание передней и</h2>
        <h2>задней подвески и ходовой части</h2>
        <v-layout align-center row v-for="list in lists2" v-bind:key="list[0]">
          <v-flex xs8>{{list[0]}}</v-flex>
          <v-flex xs3>
            <v-flex class="text-lg-left" justify-end>{{list[1]}}</v-flex>
          </v-flex>
        </v-layout>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Section_1_header',
  data () {
    return {
      lists: [
        ['Замена воздушного фильтра двигателя', 'от 200 руб'],
        ['Замена жидкости гудроусилителя руля (ГУР)', 'от 350 руб'],
        ['Замена масла АКПП', 'от 1000 руб'],
        ['Замена масла в двигателе включая замену фильтра', 'от 450 руб'],
        ['Замена масла МКПП', 'от 550 руб'],
        ['Замена охлаждающей жидкости (антифриза)', 'от 1 000 руб'],
        ['Замена ремня ГРМ', 'от 3 500 руб'],
        ['Замена салонного фильтра', 'от 350 руб'],
        ['Замена свечей зажигания', 'от 450 руб'],
        ['Замена топливного фильтра', 'от 550 руб'],
        ['Замена тормозной жидкости', 'от 550 руб']
      ],
      lists2: [
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
