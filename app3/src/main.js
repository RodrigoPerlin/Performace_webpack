import { createApp, ref } from "vue";
import Layout from "./components/layout/index.vue";

const App = {
  components: {
    layout: Layout,
  },
  template: `
    <div class="app">
      <layout />
    </div>
  `,
};

createApp(App).mount("#app");
