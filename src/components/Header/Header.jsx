import logo from "/logo-name.svg";
import { useEffect, useState } from "react";
import "./Header.css";
import styled from "styled-components";

export default function Header() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HeaderContainer>
      {/* <h3>Logo Site</h3> */}
      <img src={logo} alt="logo" />
      <span>Time now: {now}</span>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;
