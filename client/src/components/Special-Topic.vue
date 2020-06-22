<template>
    <div>
        <h3 class="special-font">{{ title }}</h3>
        <h2 class="font-weight-bold">{{ subtitle }}</h2>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subtitle']
    }
</script>

<style lang="scss" scoped>
    @font-face {
      font-family: great-vibe-font;
      src: url('../fonts/GreatVibes-Regular.ttf');
    }
    .special-font {
      font-family: great-vibe-font;
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 2em;
    }
</style>