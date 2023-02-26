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
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    font-size: 14px;
    line-height:  1.5;
    text-align: justify;
    margin: 20px 0;
    overflow: auto;
}
</style>