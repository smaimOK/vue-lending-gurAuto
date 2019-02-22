import Api from '@/services/Api'

export default {
  send (data) {
    Api().get('/test/mail.php', {params: data})
  }
}
