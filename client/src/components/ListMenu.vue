<template>
    <v-container class="mb-9">
        <h3 class="text-center text-uppercase header">
            {{ typeName }}
        </h3>
        
        <v-divider class="head-divider my-3"></v-divider>

        <v-row class="text-center">
            <v-col class=" pt-1 ma-0">
                <p class="text-caption">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, deserunt.
                </p>
            </v-col>
        </v-row>

        <v-row>
            <v-col 
             v-for="(menu, index) in listType"
             :key="index"
             class="sansserif text-uppercase my-5"
             align="center"
             cols="12"
             md="4">
                <img :src="getMenuImage(menu)" /> 
                <br>
                <p class="text-body-2 pt-3">{{ menu.name }} </p>
                <v-divider class="body-divider"></v-divider>
                <p class="text-caption pt-3 px-4 text-capitalize">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolorem.
                </p>
                <p class="text-body-2 pt-1">${{ menu.price }} </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        props: ['listType', 'typeName'],
        methods: {
            getMenuImage(menu){
                return "http://localhost:8081/" + menu.menuImage.replace(`\\`,'/')
            }
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width: 150px;
        height: 150px;
    }
    .sansserif{
        font-family:Arial, Helvetica, sans-serif;
    }
    .head-divider{
        width: 15%;
        border-top: 1px grey solid !important;
        position: relative;
        left: 42%;
    }
    .body-divider{
        width: 60%;
        border-top: 2px rgb(156, 156, 156) solid !important;
    }
    .header{
        color: rgb(122, 122, 122);
        font-weight: 700;
        letter-spacing: 1px;
    }
</style>