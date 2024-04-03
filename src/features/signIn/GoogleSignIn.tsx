import { GoogleLogin } from '@react-oauth/google';

export default function GoogleSignIn() {
    return <GoogleLogin
    onSuccess={(credentialResponse : any)  => {
      console.log(credentialResponse);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />;
}