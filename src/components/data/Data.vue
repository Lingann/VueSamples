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
                    .get('https://localhost:44339/api/user')
                    .then(response => (this.response = response.data));
            }


        }


    }
</script>

<style scoped>

</style>
