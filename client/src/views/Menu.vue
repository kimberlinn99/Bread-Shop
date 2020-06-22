<template>
    <v-container>
        <h2 class="text-center font-weight-black ma-9 pb-9">
            Our Menu
        </h2>
        <list-menu :listType="menus.bagels" typeName="Bagels"></list-menu>
        <list-menu :listType="menus.breads" typeName="Breads"></list-menu>
    </v-container>
</template>

<script>
    import MenuService from '../services/MenuService'
    import ListMenu from '@/components/ListMenu.vue'

    export default {
        data () {
            return {
                menus: null
            }
        },
        components: {
            ListMenu
        },
        async created() {
            try{
                const response = await MenuService.getAllMenu()
                this.menus = response.data
            } catch (err){
                console.log(err)
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>