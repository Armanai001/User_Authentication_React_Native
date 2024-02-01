import AuthContent from '../components/Auth/AuthContent';
import {ScrollView} from "react-native";
import {signInInterface} from "../constants/Types";
import {createUser} from "../Main/auth";
import {useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
    const [authenticating, setAuthenticating] = useState(false)

    const signUp = async ({email, password}: signInInterface) => {
        setAuthenticating(true)
        await createUser(email, password)
        setAuthenticating(false)
    }


    return <ScrollView>
        {
            authenticating ? <LoadingOverlay message="Signing up...."/> :
                <AuthContent isLogin={false} onAuthenticate={signUp}/>
        }
    </ScrollView>;
}

export default SignupScreen;
