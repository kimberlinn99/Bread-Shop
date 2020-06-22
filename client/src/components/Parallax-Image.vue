<template>
    <v-parallax :src="require('@/assets/Home-Page/' + imageName)" jumbotron height="600">
        <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                <slot></slot>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
    export default {
        props: ['imageName']
    }
</script>

<style lang="scss" scoped>
    .image-section img{
        height: 100%
    }
</style>