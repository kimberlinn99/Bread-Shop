<template>
    <div>
        <v-toolbar dense dark flat>
            <v-toolbar-title
              v-for="(menu, index) in menuBars"
              :key="index"
              text>
                <router-link :to="menu.url" class="link">
                    {{ menu.name }}
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-title class="address">
                500 TERRY FRANCOIS  ST. SF, CA 94158
            </v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                menuBars: [ 
                    {
                        name: 'HOME',
                        url: '/'
                    },
                    {
                        name: 'ORDER ONLINE',
                        url: '/order-online'
                    },
                    {
                        name: 'MENU',
                        url: '/menu'
                    },
                    {
                        name: 'ABOUT',
                        url: '/about'
                    },
                    {
                        name: 'CONTACT',
                        url: '/contact'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .address{
        font-size: 0.6em !important;
    }
    .link{
        text-decoration: none;
        padding: 10px 10px;
        color: white;
        font-size: 0.6em;
    }
</style>