<template>
  <div>
    <button @click="increment">Increment</button>
    {{ number }}
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
// const stateWorker = new Worker("../../../../services/web-worker.js");

export default {
  name: "Layout",
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    increment() {
      this.number++;
      stateWorker.postMessage({ msg: "buttonVue", value: number });
    },
    decrement() {
      this.number--;
      stateWorker.postMessage({ msg: "buttonVue", value: number });
    },
  },
};
</script>
