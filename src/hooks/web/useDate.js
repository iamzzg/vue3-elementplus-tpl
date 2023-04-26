import dayjs from 'dayjs'

const DateFormat = {
  LocaleYYYYMMDD: 'YYYY年MM月DD日'
}

export function useDate() {
  const currentDate = ref(dayjs())

  const getDateYYYYMMDD = computed(() => {
    return currentDate.value.format(DateFormat.LocaleYYYYMMDD)
  })

  const year = computed(() => {
    return currentDate.value.year()
  })
  const month = computed(() => {
    return currentDate.value.month() + 1
  })
  const date = computed(() => {
    return currentDate.value.date()
  })
  const hour = computed(() => {
    return currentDate.value.hour()
  })
  const minute = computed(() => {
    return currentDate.value.minute()
  })
  const second = computed(() => {
    return currentDate.value.second()
  })

  const intervalTimer = setInterval(() => {
    currentDate.value = dayjs()
  }, 1000)

  return {
    currentDate,
    getDateYYYYMMDD,
    year,
    month,
    date,
    hour,
    minute,
    second,
    intervalTimer
  }
}
