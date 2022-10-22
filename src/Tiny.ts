import { defineComponent, h, PropType } from 'vue-demi'
import { useDateDetail, useDateMatrix } from '@zhu-hong/usedate'
import type { IMatrixItem } from '@zhu-hong/usedate'

const today = useDateDetail()

export const Tiny = defineComponent({
  data() {
    return {
      me: 'zh',
    }
  },
  props: {
    year: {
      type: Number,
      default: today.year,
    },
    month: {
      type: Number,
      default: today.month,
    },
    date: {
      type: Number,
      default: today.date,
    },
    mondayFirst: {
      type: Boolean,
      default: false,
    },
    mark: {
      type: Function as PropType<(timestamp: number) => boolean>,
      default: (_timestamp: number) => false,
    },
  },
  computed: {
    dateMatrix() {
      return useDateMatrix(this.year, this.month, this.mondayFirst).map((week, y) => {
        return week.map((day, x) => {
          return {
            ...day,
            marked: this.mark(day.timestamp),
            pos: [x, y],
          }
        })
      })
    },
    activeDay() {
      return `${this.year}-${this.month}-${this.date}`
    },
    activePos() {
      return this.dateMatrix.flat().find((d) => d.dateStr === this.activeDay)?.pos
    },
  },
  methods: {
    onDayClick(day: IMatrixItem) {
      const { year, month, date } = day
      this.$emit('update:year', year)
      this.$emit('update:month', month)
      this.$emit('update:date', date)

      this.$emit('change', day)
    },
  },
  emits: ['update:year','update:month','update:date', 'change'],
  render() {
    return h(
      'div',
      {
        class: 'zc-tiny',
      },
      [
        ...this.dateMatrix.map((week, index) => {
          return h(
            'div',
            {
              key: index,
              class: 'zc-tiny-week',
            },
            week.map((day) => {
              return h(
                'div',
                {
                  key: day.timestamp,
                  class: [
                    'zc-tiny-day',
                    { 'other-month': day.inOtherMonth },
                    { 'mark': day.marked },
                    { 'today': day.dateStr === today.dateStr },
                    { 'active': day.dateStr === this.activeDay },
                  ],
                  onClick: () => this.onDayClick(day),
                },
                day.date,
              )
            })
          )
        })
      ],
    )
  },
})