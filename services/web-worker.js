self.onmessage = async ($event) => {
  if ($event && $event.data && $event.data.msg === "buttonVue") {
    console.log($event, "$event");
    self.postMessage($event.data.value);
  }
};
