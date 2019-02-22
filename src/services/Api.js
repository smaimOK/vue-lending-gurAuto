import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://chat-august4u.ru/'
  })
}
