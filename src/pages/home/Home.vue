<template>
    <main id="main" class="main">
        <Header></Header>
        <!--<router-view></router-view>-->
        <Body></Body>
        <List></List>
        <Footer></Footer>
    </main>

</template>

<script>
    import List from "./children/List";
    import Body from "./children/Body";
    import Header from "../../components/header/Header";
    import Footer from "../../components/footer/Footer";

    export default {
        name: "home",
        components: {Footer, Header, Body, List,}
    }
</script>

<style lang="scss" scoped>
    #main{
        width: 100%;
        height: 100%;
    }
</style>
