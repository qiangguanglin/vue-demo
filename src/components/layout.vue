<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Layout'
}
</script>

<style scoped>
.content {
    padding: 10px;
    font-weight: 400;
    color: #2c3e50;
}
</style>