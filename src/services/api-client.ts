import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6ad0e307e219499fb95d1933ae41d4e4'
  }
})