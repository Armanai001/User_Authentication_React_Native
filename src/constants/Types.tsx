import {KeyboardTypeOptions} from "react-native";

type credentialsInterface = {
    email: string,
    confirmEmail: string,
    password: string,
    confirmPassword: string
}

type inputInterface = {
    label: string,
    keyboardType: KeyboardTypeOptions | undefined,
    secure: boolean,
    onUpdateValue: (enteredValue: string) => void,
    value: string,
    isInvalid: boolean,
}

type invalidCredentials = {
    email: boolean,
    password: boolean,
    confirmEmail: boolean,
    confirmPassword: boolean,
}

type signInInterface = {
    email: string,
    password: string,
}

export {credentialsInterface, inputInterface, invalidCredentials, signInInterface}