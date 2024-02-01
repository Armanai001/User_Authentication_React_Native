import AuthContent from '..//components/Auth/AuthContent';
import {ScrollView} from "react-native";
import {useState} from "react";
import {signInInterface} from "../constants/Types";
import {loginUser} from "../Main/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
    const [authenticating, setAuthenticating] = useState(false)

    const signIn = async ({email, password}: signInInterface) => {
        setAuthenticating(true)
        await loginUser(email, password)
        setAuthenticating(false)
    }


    return <ScrollView>
        {
            authenticating ? <LoadingOverlay message="Signing in...."/> :
                <AuthContent isLogin onAuthenticate={signIn}/>
        }
    </ScrollView>;
}

export default LoginScreen;
