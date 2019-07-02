<template>
    <main id="main" class="main">
        <!--<Header></Header>-->
        <Body></Body>
    </main>

</template>

<script>
    import Body from "./body/Body";

    export default {
        name: "home",
        components: {Body}
    }
</script>

<style lang="scss" scoped>
    #main{
        width: 100%;
        height: 100%;
    }
</style>
