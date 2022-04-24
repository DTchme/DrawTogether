import styled from "styled-components";
import SettingBtn from "../components/SettingBtn";


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
`;

const StartBtn = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  padding: 10px 60px;
  border: 1px solid #718093;
  cursor: pointer;
`;



const Ready = styled.button`
  display: block;
  width: 20vw;
  height: 5vh;
  margin: 5vw auto;
  cursor: pointer;
`;

const ReadyBtn = styled(StartBtn)``;

function ready()  {
  const btnElement = document.getElementById('btn');
  btnElement.innerText = '새이름!';
}


function Waiting() {
  const enterCode = window.location.pathname.slice(-6);
  

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
            <ReadyBtn>준비하기</ReadyBtn>
          </Player>
          <Player>1
            <Ready>준비하기</Ready>
          </Player>
          <Player>2
            <Ready>준비하기</Ready>
          </Player>
          <Player>3
            <Ready>준비하기</Ready>
          </Player>
          <Player>4
            <Ready>준비하기</Ready>
          </Player>
          <Player>5
            <Ready>준비하기</Ready>
          </Player>
        </PlayerContainer>
      </Container>
    </>
  );
}

export default Waiting;
