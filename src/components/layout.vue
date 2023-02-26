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
    font-size: 14px;
    width: 100%;
    padding: 10px;
    font-weight: 400;
    color: #2c3e50;
}
</style>