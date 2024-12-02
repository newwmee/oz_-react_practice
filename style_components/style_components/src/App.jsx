import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";

//스타일컴포넌트로 작성한 css코드는 jsx파일 내부에 작성 가능
//프로젝트 안에-css 파일이 따로 없어도 됨
const BlueButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
`;

//컴포넌트재사용
//const 컴포넌트이름 = styled(재사용컴포넌트이름)`
//추가할 css속성: 속성값;`
const BigBlueButton = styled(BlueButton)`
  width: 300px;
  padding: 20px;
`;
//BlueButton에 있는 속성은 그대로 따라오니까 추가속성만 작성
//개발자 도구를 보면 Elements button 항목에 독특한 클래스명이 작성되어 있음
//styled-components에서 알아서 겹치지 않는 독측한 값의 클래스 이름을 지어주고
//그 클래스 명을 이용하여 작성한 CSS코드와 요소를 매칭 시켜 스타일 적용
//재사용 컴포넌트는 부모컴포넌트의 클래스를 가져옴 즉
//부모 컴포넌트의 속성을 가져다 사용할 수 있게 됨 -> styled-components를 재사용해서 만든다는 것은
//재사용한 컴포넌트의 클래스명을 가져다 쓰겠다

const BigTextBigBlueButton = styled(BigBlueButton)`
  font-size: 30px;
  font-weight: 900;
`;

const PropsButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.textColor || "black"};
  /*프롭스를 받는 함수 => 프롭스에 텍스트컬러가 내려왔다면 그 색상을 쓰고 아니라면 검은색을 써라*/
`;

//컴포넌트코드 안에서 스타일속성을 관리할 수 있게 되면 특정 컴포넌트의
//스타일 속성을 고정하여 사용할 수도 있음 - css코드까지 컴포넌트화 시킬수 있게 됨
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <div>hello</div>
      <BlueButton>파란색버튼</BlueButton>
      <BigBlueButton>커다란 파란색 버튼</BigBlueButton>
      {/*<BigTextBigBlueButton>글자도 커다란 파란색 버튼 </BigTextBigBlueButton>*/}
      <PropsButton backgroundColor="green" textColor="yellow">
        Props 버튼
      </PropsButton>
      <PropsButton backgroundColor="yellow" textColor="green">
        Props 버튼
      </PropsButton>
      {/*속성을 따로 설정안하면 위에 적용한 설정 그대로 적용 됨*/}
      {/*styledcomponent에 리엑트컴포넌트에 프롭스 내려주듯이
      값을 전달해 주고 그걸 작성한 styledcomponent코드 컴플릿리터럴 안에서
      ${}표시를 사용해서 받아온 프롭스를 사용하는 식으로 작성*/}
      {/*내려 받은 프롭스값을 받아서 바로 속성값으로 사용하거나 
      내려온 프롭스 값이 없다면 기본값으로 설정해서 사용하거나 하는 식으로 사용할 수 있음*/}
      {/*프롭스를 내려받아서 사용하게 만들면 하나의 컴포넌트를 만들었지만
      다양하게 활용할 수 있음 */}
      {/*bluebutton을 세종류 만들었는데 props를 받게 만들면 따로따로 만들 필요 없이
      내려주는 프롭스 값에 따라서 다양한 디자인의 버튼을 만들 수 있음*/}
    </Container>
  );
}

export default App;
