import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/Button";

function Main() {
  const [code, SetCode] = useState(1);

  const shoot = () => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const startBtn = () => {
    SetCode(Math.floor(Math.random() * 900000) + 100000);
  };

  useEffect(startBtn, []);

  return (
    <>
      <div>
        <TemplateBlock>
          {}
          대기화면
          <Link to={`./waiting/${code}`}>
            <Button> 시작 </Button>
          </Link>
          <button onClick={shoot}>testFun</button>
        </TemplateBlock>
      </div>
    </>
  );
}

const TemplateBlock = styled.div`
  width: 1600px; /*가로*/
  height: 900px; /*세로*/
  align-items: center;
  line-height: 400px;
  font-size: 5rem;
  color: black;

  position: relative;
  background: pink;
  border: 2px solid black;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙 */

  margin-top: 16px;
  margin-bottom: 16px;
  flex-direction: column;
`;

export default Main;
