import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";

//스타일컴포넌트로 작성한 css코드는 jsx파일 내부에 작성 가능
//프로젝트 안에-css 파일이 따로 없어도 됨

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>hello</div>
      <BlueButton>파란색버튼</BlueButton>
    </>
  );
}

export default App;
