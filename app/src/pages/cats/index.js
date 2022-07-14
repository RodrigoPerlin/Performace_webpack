import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Cats = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const Contener = styled.div`
    width: 100%;
  `;

  const Card = styled.div`
    text-align: center;
  `;

  const Img = styled.img`
    width: "400";
    height: "400";
  `;

  console.log(inView, "inView");
  return (
    <div>
      <div>
        <Contener>
          <Card>
            <h1>lazy e observer</h1>
            <Img
              loading="lazy"
              src="https://placekitten.com/400/400"
              alt=""
            ></Img>
          </Card>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div ref={ref}>Chegou</div>
          {inView && (
            <Card>
              <h1>Renderizado componete pelo inView</h1>
              <p>&#128522;</p>
              <p>&#128523;</p>
              <p>&#128524;</p>
              <p>&#128526;</p>
              <p>&#128525;</p>
              <p>&#128527;</p>
              <p>&#128528;</p>
              <p>&#128529;</p>
            </Card>
          )}
        </Contener>
      </div>
    </div>
  );
};
export default Cats;
