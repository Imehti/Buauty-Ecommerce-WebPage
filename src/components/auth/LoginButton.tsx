import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";

const LoginButton = () => {
    const {loginWithRedirect,isAuthenticated} =useAuth0()
    return ( 
        <>
        {!isAuthenticated && (
            <Button onClick={()=>loginWithRedirect()}>
                Sign in
            </Button>
        )}
        </>
     );
}
 
export default LoginButton;