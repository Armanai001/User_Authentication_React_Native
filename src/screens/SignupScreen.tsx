import AuthContent from '../components/Auth/AuthContent';
import {ScrollView} from "react-native";

function SignupScreen() {
    return <ScrollView>
        <AuthContent isLogin={false} onAuthenticate={() => {
        }}/>
    </ScrollView>;
}

export default SignupScreen;
