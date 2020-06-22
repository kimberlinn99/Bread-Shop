<template>
    <v-container class="ma-0 pa-0">
        
         <v-row>
            <img src="@/assets/About/about.jpg" width="600" height="400">
            <v-col class="px-7 mt-8">
                <special-topic
                 title="about"
                 subtitle="Our Bakery">
                </special-topic>
                <br>
                <p class="text-caption">Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Atque, quidem inventore dolorem cumque modi ad iure 
                laboriosam consequuntur voluptatem dolorum officiis, exercitationem placeat
                magni quos asperiores similique nobis aperiam sunt quis porro? Repudiandae
                in, corporis assumenda modi explicabo omnis nostrum.</p>
                <div></div>
                <p class="text-caption">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, cumque.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nihil!
                </p>
            </v-col>
        </v-row>

        <v-row class="second-row">
            <v-col col="12" sm="4" offset-md="3" class="mt-15 px-7">
                <special-topic
                 title="our"
                 subtitle="Products">
                </special-topic>
                <br>
                <p class="text-caption">Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Atque, quidem inventore dolorem cumque modi ad iure 
                laboriosam consequuntur voluptatem dolorum officiis, exercitationem placeat
                magni quos asperiores similique nobis aperiam sunt quis porro? Repudiandae
                in, corporis assumenda modi explicabo omnis nostrum.</p>
                <div></div>
                <p class="text-caption">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, cumque.
                </p>
            </v-col>
            <v-col col="12" sm="3">
                <img src="@/assets/About/product.jpg" class="second-image">
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import SpecialTopic from '../components/Special-Topic'
    
    export default {
        components: {
            SpecialTopic
        }
    }
</script>

<style lang="scss" scoped>
    .second-row{
        margin-top: -13px;
        margin-bottom: -20px;
    }

    .second-image{
        margin-left: 50px;
    }
</style>