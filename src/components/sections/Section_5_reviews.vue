<template>
  <v-container fluid row ma-0 pa-0 class="sect pt-5 pb-5" style="background: url('static/background.png') repeat;" id="section5">

    <v-flex class="text-xs-center display-2 pb-3 font-weight-thin font-italic" dark ><h3 class="white--text">Отзывы!</h3></v-flex>
    <v-layout align-start justify-center row wrap>
      <v-card
        class="mx-auto mx-2 mt-2"
        color="#4a76a8"
        dark
        width="600"
        v-for="(list,i) in lists" v-bind:key="i">
        <v-img
          :src="list.carImg"
          height="200px"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              ВКонтакте
              <v-btn outline color="gray" :href="list.url" target="_blank">Оригинал</v-btn>
            </div>

            <span class="grey--text">{{list.car}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-list-tile class="grow">
            <v-list-tile-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                :src="list.profImg"
              ></v-img>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{list.name}}</v-list-tile-title>
            </v-list-tile-content>

            <v-spacer></v-spacer>
            <span class="subheading mr-2">{{list.date}}</span>
            <v-btn icon @click="list.show = !list.show">
              <v-icon>{{ list.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>

          </v-list-tile>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="list.show">
            {{list.msg}}
          </v-card-text>
        </v-slide-y-transition>

      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Section_5_reviews',
  data () {
    return {
      lists: [
        {msg: '"Дешевле за такой качественный ремонт в Томске не найдешь. Рулевая, как новая. Без стуков, без бряков."', name: 'Андрей Незабудкин', date: '25.12.2017', car: 'Opel Astra', profImg: 'http://bootstraptema.ru/snippets/block/2016/rotate-block/rotating_card_profile2.png', url: 'https://vk.com/wall-113583161_706?reply=712', carImg: 'http://gidra.tom.ru/img/fed/fdb-1.jpg', show: false},
        {msg: '"Спасибо,все сделано на высшем уровне.И гарантия полгода радует.😉"', name: 'Тамара Стеля', date: '18.01.2018', car: 'Honda CR-V', profImg: 'http://gidra.tom.ru/img/fed/fdb-2.jpg', url: 'https://vk.com/wall-113583161_720?reply=721', carImg: 'http://gidra.tom.ru/img/fed/fdb-2.jpg', show: false},
        {msg: '"Парни своё дело знают. Рейка стала новее новой! Вернули лёгкость управления автомобилем! Ценник у них божеский! Рекомендую!"', name: 'Слава Иванов', date: '06.04.2018', car: 'Toyota Crown', profImg: 'http://gidra.tom.ru/img/fed/no.png', url: 'https://vk.com/wall-113583161_755?reply=756', carImg: 'http://gidra.tom.ru/img/fed/fdb-3.jpg', show: false},
        {msg: 'Если Вы у нас уже были, то оставьте отзыв в нашей группе вк. И получите скидку 15%! Мы всегда рады новым клиентам', name: 'Оставьте Свой Отзыв', date: '', car: 'Помогите нам, стать лучше!', profImg: 'http://gidra.tom.ru/img/fed/av-fdb-3.jpg', url: 'https://vk.com/public178166154', carImg: 'http://gidra.tom.ru/img/fed/fdb-4.jpg', show: true}
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
