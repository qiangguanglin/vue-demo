<template>
  <div class="content">
    <h2 class="header">
        <slot name="header"></slot>
    </h2>
    <div class="describe">
        <slot name="describe"></slot>
    </div>
    <div class="component">
        <slot name="component"></slot>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.content {
    padding-bottom: 20px;
}
.header {
    padding-bottom: 20px;
}
.describe {
    text-indent:30px;
    padding-bottom: 20px;
}
.component {
    padding: 10px;
    box-shadow: rgb(228, 230, 242) 0px 2px 6px 0px;
    height: 100px;
    overflow: auto;
    width: calc(100% - 20px);
    position: relative;
}
</style>