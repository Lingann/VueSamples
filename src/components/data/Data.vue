<template>
<div>
    <p>
        {{response}}
    </p>

</div>
</template>

<script>
    export default {
        name: "Data",
        data: function () {
            this.request();
            return {
                response : ""
            }
        },
        methods: {
            request : function(){
                this.$axios
                    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => (this.response = response))
            }
        }


    }
</script>

<style scoped>

</style>
