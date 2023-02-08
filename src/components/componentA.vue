<template>
    <div>
        <div>
            {{typeA[0].value}}
            ---<slot name="slotC" :data="typeA">55555</slot>
        </div>
        <div>
            {{ typeB }}
            <slot name="slotB"></slot>
        </div>
        <slot name="slotA"></slot>
        <!-- <component-T :uuuu="typeA"/> -->
    </div>
</template>

<script>

export default {
    name: 'componentA',
    props: {
        typeA: {
            type: Array,
            default: () => []
        },
        typeB: {
            type: String,
        }
    },
    created() {
        this.$emit('a-data', 444);
        this.$emit('b-data', 'opppp');
    },
    methods: {
        open() {
            console.log('0==-=6=6=6=6=6=')
        }
    }
    
}
</script>
<style scoped>

</style>