import { defineComponent, h } from 'vue-demi'

export default defineComponent({
  render() {
    return h(
      'div',
      {
        class: 'w-screen h-screen',
        onClick(e: MouseEvent) { console.log(e) },
      },
    )
  },
})