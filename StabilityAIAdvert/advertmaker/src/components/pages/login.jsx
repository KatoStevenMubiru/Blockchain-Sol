// login.jsx
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Path to your firebase.js file
import { Button, Container } from "../styles/loginStyle";

function LoginPage() {
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
