import { createApp } from "vue";

const App = {
  template: `
    <h1>React in Vue</h1>
    <div class="app">
      <p>Hello</p>
    </div>
  `,
};

createApp(App).mount("#app");
