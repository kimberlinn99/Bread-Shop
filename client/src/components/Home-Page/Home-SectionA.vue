<template>
    <parallax-image imageName="Bread-Home-SectionA.jpg">
        <h1 class="font-weight-bold ma-0 pa-0">
            Bread.
        </h1>
        <h2 class="subheading font-weight-bold">
            It's the Simple Pleasures in Life
        </h2>
    </parallax-image>
</template>

<script>
    import ParallaxImage from '../Parallax-Image'

    export default {
        components:{
            ParallaxImage
        }
    }
</script>

<style lang="scss" scoped>
    h1{
        font-size: 8em;
    }
</style>