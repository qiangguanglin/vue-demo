<template>
    <div class="layout_content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Layout'
}
</script>

<style scoped>
.layout_content {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgb(238, 241, 248);
    font-size: 14px;
    font-weight: 400;
    padding: 20px;
    color: #2c3e50;
    overflow: hidden;
    padding: 20px;
}
</style>