<template>
    <div>
        {{inputValue}}
        <edit-input class="input_class" v-model="inputValue"></edit-input>
    </div>
</template>

<script>
import EditInput from '../components/edit-input.vue'

export default {
    components: {
        EditInput,
    },
    data() {
        return {
            inputValue: '1111'
        }
    },
    methods: {
    }
    
}
</script>
<style scoped>
.input_class {
    width:100px
}
</style>