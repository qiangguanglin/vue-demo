<template>
    <div class="text_content_origin">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TextContent'
}
</script>

<style scoped>
.text_content_origin {
    font-size: 14px;
    text-indent:  30px;
    line-height:  1.5;
    text-align: justify;
}
</style>