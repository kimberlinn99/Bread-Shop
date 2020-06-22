import Api from './Api'

export default {
    getAllMenu() {
        return Api().get('/menu')
    },
    orderMenu(order, totalPrice, specialRequest){
        return Api().post('/menu/order', order, totalPrice, specialRequest)
    }
} 