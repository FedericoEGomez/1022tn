import axios from 'axios';


//https://1022tn-production.up.railway.app/v1/info
// get - delete 
const smartPhonesList = async () => {
    const {data} = await axios.get('https://1022tn-production.up.railway.app/v1/info')
    return data
}
const smartPhonesUnique = async (id) => {
    const {data} = await axios.get('https://1022tn-production.up.railway.app/v1/buscar/id/' + id)
    return data
}

// post put pacth
let body = {}
const newSmartPhones = async (body) => {
    const {data} = await axios.post('https://1022tn-production.up.railway.app/v1/crear',{})
    return data
}

const smartPhonesListConToken = async (token) => {
    const {data} = await axios.get('https://1022tn-production.up.railway.app/v1/info',{
        headers:{
            JWTtoken: token
        }
    })
    return data
}
const newSmartPhonesConToken = async (body,token) => {
    const {data} = await axios.post('https://1022tn-production.up.railway.app/v1/crear',body,{
        headers:{
            JWTtoken: token
        }
    })
    return data
}
