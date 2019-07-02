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
                    .get('http://139.155.116.230/api/values')
                    .then(response => (this.response = response))
            }
        }


    }
</script>

<style scoped>

</style>
