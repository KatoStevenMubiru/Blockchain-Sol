// login.jsx
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Path to your firebase.js file
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #4b6cb7, #182848);
  color: white;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #61dafb;
  color: black;
  cursor: pointer;
`;

function LoginPage() {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now()); // This will trigger a re-render
  }, []);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      client_id: import.meta.env.VITE_APP_CLIENT_ID,
    });
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/adMaker"); // Redirect to the adMaker page after successful login
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  return (
    <Container>
      <h1>Login</h1>
      <Button onClick={handleGoogleLogin}>Sign in with Google</Button>
    </Container>
  );
}

export default LoginPage;
