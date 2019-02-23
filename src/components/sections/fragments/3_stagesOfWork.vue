<template>
  <v-timeline
  dark
  :dense="this.$vuetify.breakpoint.name === 'xs' || false">
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon
            dark
            size="42"
            class="mr-3">
            mdi-magnify
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">Вы звоните нам</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs2 :mr-3="this.$vuetify.breakpoint.name === 'xs' || false">
              <v-icon size="64">phone</v-icon>
            </v-flex>
            <v-flex xs10>
              По телефону наш сотрудник выяснит все детали и запишет Вас на бесплатную диагностику
              <h3><v-icon>access_time</v-icon> 9:00</h3>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="display-1 mr-3 white--text font-weight-light">Приезжаете к нам в сервис</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs2 :mr-4="this.$vuetify.breakpoint.name === 'xs' || false">
              <v-icon size="64">fa-car</v-icon>
            </v-flex>
            <v-flex xs10>
             В сервисе Вас уже будет ожидать сотрудник, который примет Вашу машину и произведет ее диагностику. Вы сможете увидеть весь процесс и при желании сами убедиться в исправности или неисправности деталей.
             <h3><v-icon>access_time</v-icon> 10:30</h3>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right>
      <v-card>
        <v-card-title class="cyan lighten-1">
          <h2 class="display-1 white--text font-weight-light">Ремонтируем Вашу машину</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs2 :mr-4="this.$vuetify.breakpoint.name === 'xs' || false">
              <v-icon size="64">fa-tools</v-icon>
            </v-flex>
            <v-flex xs10>
              Если Вашей машине необходим ремонт, то мастер назовет стоимость ремонта, а так же комплектующих (наш сервис сотрудничает с магазином запчастей и покупать запчасти у нас выгоднее, чем в обчных автомагазинах). После чего сразу приступаем к ремонту машины
             <h3><v-icon>access_time</v-icon> 11:00</h3>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 class="display-1 mr-3 white--text font-weight-light">Забираете машину</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs2 :mr-4="this.$vuetify.breakpoint.name === 'xs' || false">
              <v-icon size="64">fa-check-circle</v-icon>
            </v-flex>
            <v-flex xs10>
              Наши мастера занимаются ремонтом рулевых реек и других запчастей машин более 8 лет, поэтому ремонт чаще всего не занимает более одного дня. Расчет за выполненую работу.
              <h3><v-icon>access_time</v-icon> 19:00</h3>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: 'stagesOfWork',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
