import Api from './Api'

export default {
    subscribe(email) {
        return Api().post('/subscribe', {
            email: email
        })
    }
} 