<template>
    <div>
        <Header></Header>
        <!--<router-view></router-view>-->
        <List></List>
        <Footer></Footer>
    </div>

</template>

<script>
    import Header from "../../components/header/Header";
    import List from "./children/List";
    import Footer from "../../components/footer/Footer";
    export default {
        name: "home",
        components: {Footer, List, Header}
    }
</script>

<style lang="scss" scoped>

</style>
