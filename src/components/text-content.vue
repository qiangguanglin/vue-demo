<template>
    <div class="text_content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TextContent'
}
</script>

<style scoped>
.text_content {
    text-indent:  30px;
    line-height:  1.5;
    text-align: justify;
}
</style>