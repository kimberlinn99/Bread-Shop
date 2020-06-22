import Api from './Api'

export default {
    sendFeedback(name, email, message) {
        return Api().post('/contact', {
            name: name,
            email: email,
            message: message
        })
    }
} 