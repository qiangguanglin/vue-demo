<template>
    <layout>
        {{inputValue}}
        <computed-input class="input_class" v-model="inputValue"></computed-input>
        {{modelValue}}
        <model-input class="input_class" v-model="modelValue"></model-input>
    </layout>
</template>

<script>
import ModelInput from '../components/model-input.vue'
import ComputedInput from '../components/conputed-input.vue'

export default {
    components: {
        ModelInput,
        ComputedInput
    },
    data() {
        return {
            inputValue: '1111',
            modelValue: '22222'
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