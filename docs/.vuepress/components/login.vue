<template>
    <div>
        这里可以写组件
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            this.$router.push({ path: "/home/index.html" });
        }
    }
}
</script>