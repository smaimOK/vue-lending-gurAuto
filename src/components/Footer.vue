<template>
  <v-footer
    dark
    height="auto">
    <v-card
      class="flex"
      flat
      tile>
      <v-card-title class="primary lighten-2">
        <strong class="subheading">Томск. Ремонт рулевой рейки вашего авто</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon,i ) in icons"
          :key="i"
          class="mx-3"
          dark
          icon
          :href="icon.url"
          target="_blank"
        >
          <v-icon size="24px">{{ icon.class }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center" row>
        <v-flex class="text-md-left">тел.: +7 (952) 157-87-51</v-flex>
        <v-flex class="text-md-center">&copy;2019 — <strong>GuR-AUTO</strong></v-flex>
        <v-flex class="text-md-right"><v-btn outline href="https://vk.com/doctype1epta" target="_blank">Pavlov Sergey</v-btn></v-flex>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      icons: [
        {class: 'fab fa-vk', url: 'https://vk.com/public178166154'},
        {class: 'fab fa-facebook'},
        {class: 'fab fa-instagram', url: 'https://www.instagram.com/gidra.tom.ru/'}
      ]
    }
  }
}
</script>

<style scoped>
</style>
