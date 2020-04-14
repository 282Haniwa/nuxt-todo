<template>
  <div class="limit-root">
    <div :class="{ 'limit-day': true, saturday: date.getDay() === 6, sunday: date.getDay() === 0 }">
      {{ day }}
    </div>
    <div class="limit-month">{{ month }}</div>
  </div>
</template>

<script>
const monthList = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'June',
  'July',
  'Aug.',
  'Sept.',
  'Oct.',
  'Nov.',
  'Dec.',
];

export default {
  name: 'Limit',
  props: {
    date: {
      type: Date,
      default: new Date(),
    },
  },
  computed: {
    day() {
      return this.date.getDate();
    },
    month() {
      return monthList[this.date.getMonth()];
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style lang="scss" scoped>
.limit-root {
  height: 48px;
  width: 48px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: $color-text;
}

.limit-day {
  font-size: 36px;
  line-height: 42px;

  &.saturday {
    color: #23bcdd;
  }

  &.sunday {
    color: #ff5470;
  }
}

.limit-month {
  font-size: 14px;
  line-height: 16px;
}
</style>
