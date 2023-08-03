import throttle from 'lodash/throttle'

export default {
    inserted(el, binding) {
        el.handle = throttle(binding.value, binding.arg || 1000)
        el.addEventListener('input', el.handle)
    },
    unbind(el) {
        el.removeEventListener('click', el.handle)
    }
}