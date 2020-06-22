<template>
    <v-container class="ma-0 pa-0">
        <v-row class="first-row">
            <v-col col="12" sm="4" offset-md="3" class="mt-10 pr-7">
                <special-topic
                    title="About"
                    subtitle="Our Bakery">
                </special-topic>
                <br>
                <p class="text-caption">Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Atque, quidem inventore dolorem cumque modi ad iure 
                laboriosam consequuntur voluptatem dolorum officiis, exercitationem placeat
                magni quos asperiores similique nobis aperiam sunt quis porro? Repudiandae
                in, corporis assumenda modi explicabo omnis nostrum.</p>
                <br>
                <router-link to="/about" class="router-link-text">
                    <v-btn dark tile depressed small class="text-capitalize my-10">
                        Read more
                    </v-btn>
                </router-link>
            </v-col>
            <v-col col="12" sm="3" class="pa-0 ma-0">
                <img src="@/assets/Home-Page/Home-SectionC1.jpg">
            </v-col>
        </v-row>
        <v-row>
                <img class="second-image" src="@/assets/Home-Page/Home-SectionC2.jpg">
            <v-col class="px-7 mt-8">
                <special-topic
                    title="gluter-free"
                    subtitle="Products">
                </special-topic>
                <br>
                <p class="text-caption">Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Atque, quidem inventore dolorem cumque modi ad iure 
                laboriosam consequuntur voluptatem dolorum officiis, exercitationem placeat
                magni quos asperiores similique nobis aperiam sunt quis porro? Repudiandae
                in, corporis assumenda modi explicabo omnis nostrum.</p>
                <br>
                <router-link to="/order-online" class="router-link-text">
                    <v-btn dark tile depressed small class="text-capitalize my-6">
                        Shop now
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import SpecialTopic from '../Special-Topic'
    
    export default {
        components: {
            SpecialTopic
        }
    }
</script>

<style lang="scss" scoped>
    .second-image{
        width: 540px; 
        height: 380px;   
    }
    .first-row{
        margin-bottom: -9px;
    }
    .router-link-text{
        text-decoration: none;
    }
</style>