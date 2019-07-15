<template>
    <div id="modals">
        <button type="button" class="btn" @click="showModal">OpenModal</button>
        <modal v-show="isModalVisible" @click="closeModal"></modal>
    </div>
</template>


<script>
    import modal from "../../components/common/modal/Modal2"
    export default {
        name: "Modals",
        data: function () {
            return {
                isModalVisible: false,
            };
        },
        components: {
            modal
        },
        methods: {
            showModal() {
                console.log("???")
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        },
    }
</script>

<style scoped>

</style>
