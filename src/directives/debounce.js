import debounce from 'lodash/debounce'

export default {
    inserted(el, binding) {
        el.handle = debounce(binding.value, binding.arg || 1000)
        el.addEventListener('click', el.handle)
    },
    unbind(el) {
        el.removeEventListener('click', el.handle)
    }
}