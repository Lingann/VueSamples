<template>
    <div id="form">
        <form @submit.prevent="submit">

            <div class="field">
                <span>姓名：</span> <input name="name" type="text">
            </div>
            <div class="field">
                <span>年龄：</span> <input name="age" type="number">
            </div>
            <div class="field">
                <span>email：</span> <input name="email" type="email">
            </div>

            age: 0 ,
            <input type="submit" value="提交">
        </form>
    </div>
</template>

<script>
    export default {
        name: "User",
        data:function () {
            return {
                user:{
                    name : "",
                    email: "123@123.com"
                }
            }
        },
        methods:{
            submit : function (e) {
                const formData = new FormData(e.target);
                const value = {};
                for(let pair of formData.entries()) {
                    value[pair[0]] = pair[1];
                }
                console.log(value);
                this.$axios
                    .post('https://localhost:44339/api/user',{
                        name: value.name,
                        age: value.age,
                        email: value.email
                    })
                    .then(response => (this.response = response))
            }
        }
    }
</script>

<style scoped>

</style>
