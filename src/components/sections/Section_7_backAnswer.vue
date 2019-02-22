<template>
  <v-container fluid row ma-0 pa-0 mb-4 class="sect pt-5 pb-5" justify-center id="section7">
    <v-flex class="text-xs-center display-2 pb-3 font-weight-thin font-italic" light><h3>Оставить заявку</h3></v-flex>
    <v-flex style="width:100%;"><h3 class="text-xs-center" light>Оставь заявку и получил 10% скидки</h3></v-flex>
    <v-layout justify-center>
    <v-flex xs11 md6 lg4>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        justify-center>

        <v-text-field
          v-model="mail2.name"
          :counter="20"
          :rules="nameRules"
          label="Имя"
          required
        ></v-text-field>

        <v-text-field
          v-model="mail2.phone"
          :rules="phoneRules"
          :counter="11"
          mask="# (###) ### ##-##"
          label="Телефон"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          @click="validate"
          block>
          Отправить
        </v-btn>
        <v-alert
          v-model="alert"
          dismissible
          type="success">
            Заявка успешно отправлена! Скора вам позвонят..
        </v-alert>
      </v-form>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ServiceMail from '@/services/ServiceMail'

export default {
  name: 'Section_6_backAnswer',
  data () {
    return {
      alert: false,
      valid: true,
      mail2: {
        name: '',
        phone: ''
      },
      nameRules: [
        v => !!v || 'Введите имя',
        v => (v && v.length <= 20) || 'Должно быть не более 20 символов'
      ],
      phoneRules: [
        v => !!v || 'Введите номер телефона, для обратной связи!',
        v => (v && v.length === 11) || 'Некорректно введен номер телефона!'
      ]
    }
  },
  methods: {
    async validate () {
      if (this.$refs.form.validate()) {
        try {
          await ServiceMail.send(this.mail2)
          this.alert = true
          this.$refs.form.reset()
        } catch (error) {
          alert('Что то пошло не так')
        }
      }
    }
  }
}
</script>

<style scoped>
  .sect {
  }
</style>
