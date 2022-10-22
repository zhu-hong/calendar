import { defineComponent, h } from 'vue-demi'
import { Tiny } from './src/index'
import './tiny-style.scss'

export default defineComponent({
  data() {
    return {
      mondayFirst: true,
      year: 2022,
      month: 10,
      date: 1,
    }
  },
  render() {
    return h(
      'div',
      [
        h(
          Tiny,
          {
            mondayFirst: this.mondayFirst,
            year: this.year,
            month: this.month,
            date: this.date,
            mark() {
              return true
            },
            "onUpdate:year": (year) => { this.year = year },
            "onUpdate:month": (month) => { this.month = month },
            "onUpdate:date": (date) => { this.date = date },
          }
        ),
      ]
    )
  },
})