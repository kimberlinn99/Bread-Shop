<template>
    <v-container>
        <v-row class="pt-10">
            <v-col>
                <h2 class="font-weight-bold text-center">
                    Fresh From the Oven to Your Doorstep
                </h2> 
            </v-col>
        </v-row>
        <v-row justify="center" class="py-10">
            <v-col 
             cols="12" 
             sm="4"
             v-for="(img, index) in imgs"
             :key="index">
                <img :src="require('@/assets/Home-Page/' + img.url)">
                <h4 class="text-center">{{img.name}}</h4> 
            </v-col>
           
        </v-row>
        <v-row class="py-7">
            <v-col class="text-center">
                <router-link to="/order-online" class="router-link-text">
                    <v-btn dark tile depressed small class="text-capitalize">
                        Order online
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return{
                imgs: [
                    {
                        url:'Home-SectionB1.jpg',
                        name: 'Sourdough Bread'
                    },
                                        {
                        url:'Home-SectionB2.jpg',
                        name: 'Cold Brew Coffee'
                    },
                                        {
                        url:'Home-SectionB3.jpg',
                        name: 'Pretzel Paradise'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1{
        font-size: 8em;
    }
    img{
        width: 250px;
        height: 250px;
    }
    .router-link-text{
        text-decoration: none;
    }
</style>