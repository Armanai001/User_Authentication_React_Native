import AuthContent from '..//components/Auth/AuthContent';
import {ScrollView} from "react-native";

function LoginScreen() {
    return <ScrollView>
        <AuthContent isLogin onAuthenticate={() => {
        }}/>
    </ScrollView>;
}

export default LoginScreen;
