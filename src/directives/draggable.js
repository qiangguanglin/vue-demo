const draggable = {
    inserted: function (el, binding) {
      el.style.cursor = 'move'
      el.onmousedown = function (e) {
        console.log('e: ', e);
        let disx = e.pageX - el.offsetLeft
        let disy = e.pageY - el.offsetTop
        document.onmousemove = function (e) {
          let x = e.pageX - disx
          let y = e.pageY - disy
          const fatherDom = document.getElementById(binding.arg)
          let maxX = fatherDom.offsetWidth - parseInt(window.getComputedStyle(el).width) || document.body.clientWidth
          let maxY = fatherDom.offsetHeight - parseInt(window.getComputedStyle(el).height) || document.body.clientHeight
          if (x < 0) {
            x = 0
          } else if (x > maxX) {
            x = maxX
          }
   
          if (y < 0) {
            y = 0
          } else if (y > maxY) {
            y = maxY
          }
   
          el.style.left = x + 'px'
          el.style.top = y + 'px'
        }
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null
        }
      }
    },
  }
  export default draggable