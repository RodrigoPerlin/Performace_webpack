import React from "libs/react";
const RemoteButton = React.lazy(() => import('app2/Pokemon'));

const App = () => (
  <div>
    <p> Webpack 5</p>
    <div>
      <img
        loading="lazy"
        src="https://placekitten.com/400/400"
        width="400"
        height="400"
        alt=""
      ></img>
       </div>
       <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
