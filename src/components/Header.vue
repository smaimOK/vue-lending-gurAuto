<template>
  <v-toolbar color="rgb(0, 0, 0, 0.8)" fixed dark>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title><v-icon class="hidden-md-and-down">home</v-icon> Gur-auto</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-flex md2 xs3>Cерверные услуги г.Томск&nbsp;&nbsp;</v-flex>
    <v-flex text-xs-center md2 xs4 v-scroll-to="'#section7'" style="cursor:pointer;"><v-icon>phone</v-icon>+7 (952) 157-87-51</v-flex>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn outline color="purple" v-scroll-to="'#section7'">Оставить заявку</v-btn>
      <v-btn flat v-scroll-to="'#section3'">Почему мы</v-btn>
      <v-btn flat v-scroll-to="'#section4'">Наши работы</v-btn>
      <v-btn flat v-scroll-to="'#section2'">Цены</v-btn>
      <v-btn flat v-scroll-to="'#section5'">Отзывы</v-btn>
      <v-btn flat v-scroll-to="'#section6'">Контакты</v-btn>
    </v-toolbar-items>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      height="300"
      width="200">
      <v-list class="pt-0">
        <v-divider></v-divider>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i">
          <v-list-tile-content>
            <v-btn color="" block outline v-scroll-to="item.to">{{ item.title }}</v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      drawer: false,
      items: [
        {
          title: 'Оставить заявку',
          to: '#section7'
        },
        {
          title: 'Почему мы',
          to: '#section3'
        },
        {
          title: 'Наши работы',
          to: '#section4'
        },
        {
          title: 'Цены',
          to: '#section2'
        },
        {
          title: 'Отзывы',
          to: '#section5'
        },
        {
          title: 'Контакты',
          to: '#section6'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
