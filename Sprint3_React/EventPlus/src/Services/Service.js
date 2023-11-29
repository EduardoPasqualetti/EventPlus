import axios from 'axios'

/** 
* Route for Events
*/
export const eventsResource = '/Evento'

/** 
* Route for the Next Events
*/
export const nextEventsResource = 'Evento/ListarProximos'

/** 
* Route for Type of Event
*/
export const eventsTypeResource = '/TiposEvento'

/** 
* Route for Login
*/
export const loginResource = '/Login'


const apiPort = '5000'
const localApiUrl = `http://localhost:${apiPort}/api`
//const externaApiUrl = null

const api = axios.create({
    baseURL: localApiUrl
})

export default api;