
import clienteAxios from '../../config/axios'


//Funcion para enviar datos(POST)
export const enviarDatos = async usuario =>{

    try {
        const res = await clienteAxios.post('/api/usuarios', usuario)
        if(res.status === 200){
            return true
        }
    }catch(error){
        console.error(error)
    }
}