import axios from 'axios'


const clienteAxios = axios.create({
    baseURL : import.meta.env.VITE_SOME_URL
})

export default clienteAxios;