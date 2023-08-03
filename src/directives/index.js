import clickOutside from 'element-ui/src/utils/clickoutside'
import debounce from './debounce'
import throttle from './throttle'
import draggable from './draggable'
 import copy from './copy'

const directives = {
    clickOutside,
    debounce,
    throttle,
    draggable,
    copy
}

export default {
    install(Vue) {
        Object.keys(directives).forEach(v => {
            Vue.directive(v, directives[v])
        })
    }
}