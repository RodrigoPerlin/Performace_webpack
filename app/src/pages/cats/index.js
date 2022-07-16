import React, { Suspense, lazy } from "react";
import { Contener, Card, Img } from "./cats-styled";

const Cats = () => {
  const Main = lazy(() => import("app3/Main"));

  return (
    <div>
      <div>
        <Contener>
          <Card>
            <h1>Hello</h1>
            <Img
              loading="lazy"
              src="https://placekitten.com/400/400"
              alt=""
            ></Img>
          </Card>
          <br></br>
          <Card>
            <h1>Vue , message, app 3</h1>
          </Card>
        </Contener>
      </div>
    </div>
  );
};
export default Cats;
