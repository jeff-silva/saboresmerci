<template><div class="ui-carousel">
  carousel
</div></template>

<!-- 

<script scoped>
import { Flicking } from "@egjs/vue-flicking";

export default {
  components: { Flicking },

  props: {
    value: {default:0},
    options: {default:()=>({})},
  },

  watch: {
    $props: {deep:true, handler(value) {
      this.props = Object.assign({}, value);
      this.flickingInit();
    }},
  },

  data() {
    return {
        props: Object.assign({}, this.$props),
        flicking: false,
        itemsTotal: 0,
    };
  },

  computed: {
    compOptions() {
      return Object.assign({
        circular: true,
      }, this.options);
    },
  },

  methods: {
    flickingInit() {
      setTimeout(() => {
        try {
          this.flicking = this.$refs.flicking;
          this.itemsTotal = this.$refs.flicking.getPanelCount();
          this.$refs.flicking.moveTo(this.$props.value);
        } catch(e) { console.error(e); }
      }, 100);
    },

    onChange(ev) {
      this.props.value = ev.index;
      this.$emit('input', this.props.value);
    },

    moveTo(index, duration) { this.$refs.flicking.moveTo(index, duration); },
    prev() { this.$refs.flicking.prev(); },
    next() { this.$refs.flicking.next(); },
  },

  mounted() {
    this.flickingInit();
  },
};
</script> -->
