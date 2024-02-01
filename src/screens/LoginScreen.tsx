import AuthContent from '..//components/Auth/AuthContent';
import {Alert, ScrollView} from "react-native";
import {useState} from "react";
import {signInInterface} from "../constants/Types";
import {loginUser} from "../Main/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
    const [authenticating, setAuthenticating] = useState(false)

    const signIn = async ({email, password}: signInInterface) => {
        setAuthenticating(true)
        try {
            await loginUser(email, password)
        } catch (error) {
            Alert.alert('Authentication failed', 'Please check your credentials')
        }
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
