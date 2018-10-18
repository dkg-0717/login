import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance