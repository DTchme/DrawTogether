import styled from "styled-components";
import SettingBtn from "../components/SettingBtn";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Container = styled.div`
  padding-left: 10vw;
`;

const Header = styled.div`
  height: 10vh;
`;

const Content = styled.div`
  padding-left: 10vw;
  height: 20vh;
`;

const Title = styled.h1`
  display: inline;
`;

const CodeText = styled.h4`
  margin-left: 10vw;
  display: inline;
`;

const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: 25vw 25vw 25vw;
  grid-template-rows: 25vh 25vh;
  grid-gap: 3vw;
  text-align: center;
`;

const Player = styled.div`
  padding-left: 3vw;
  padding-right: 3vw;
  padding-top: 3vh;
  border: 1px solid #718093;
  background-color: ${props => props.color};
`;

const StartBtn = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  padding: 10px 60px;
  border: 1px solid #718093;
  cursor: pointer;
`;

const ReadyBtn = styled(StartBtn)``;

function Waiting() {
  const enterCode = window.location.pathname.slice(-6);

  const nickName = () => {
    axios
      .get('', {
        params: {
          nickname: "",
        },
      })
      .then(function (response) {
        console.log("");
      }
      );
  }; //닉네임 요청 및 출력 함수

  const [color, setColor] = useState('white');
  const onClick = () => {
    color === 'white' ? setColor('yellow') : setColor('white');
  };

  return (
    <>
      <Container>
        <Header>
          <SettingBtn>설정</SettingBtn>
        </Header>
        <Content>
          <Title>같이 그릴까?</Title>
          <CodeText>입장 코드 : {enterCode}</CodeText>
        </Content>
        <PlayerContainer>
          <Player>
            <StartBtn>시작하기</StartBtn>
            <ReadyBtn onClick={onClick}>준비하기</ReadyBtn>
          </Player>
          <Player color={color}>{nickName}
          </Player>
          <Player color={color}>{nickName}
          </Player>
          <Player color={color}>{nickName}
          </Player>
          <Player color={color}>{nickName}
          </Player>
          <Player color={color}>{nickName}
          </Player>
        </PlayerContainer>
      </Container>
    </>
  );
}

export default Waiting;
