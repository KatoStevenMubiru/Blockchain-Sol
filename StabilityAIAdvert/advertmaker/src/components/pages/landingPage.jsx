//landingPage.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { TypeAnimation } from "react-type-animation";
import LoginPage from "./login";


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap');

  body {
    font-family: 'Source Sans Pro', sans-serif;
    color: #F5F5F5; /* Light Gray */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
    color: #FFFFFF; /* White */
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(to right, #4b6cb7, #182848);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  text-align: center;
  background: linear-gradient(to right, #4b6cb7, #182848);
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #182848;
  color: white;
  cursor: pointer;
  font-size: 18px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  background: linear-gradient(to right, #4b6cb7, #182848);
`;

const colorChange = keyframes`
  0% { color: #39FF14; } /* Neon Green */
  50% { color: #40E0D0; } /* Turquoise */
  100% { color: #39FF14; }
`;

const AnimatedParagraph = styled.p`
  animation: ${colorChange} 2s linear infinite;
  font-size: 18px;
`;

function LandingPage() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Creantly.AI</h1>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </Header>
      <Main>
        <TypeAnimation
          sequence={[
            "Welcome To Our Content Creation Assistant",
            1000,
            "Generate AI Images Of Your Choice",
            1000,
            "Great Things Await",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="h2"
        />
        <AnimatedParagraph>
          Login To Start Generating
        </AnimatedParagraph>
      </Main>
      <Footer>
        <p>Developed by Sibomana Glorry & Kato Steven</p>
      </Footer>
    </>
  );
 }
 
 export default LandingPage;

 
 
