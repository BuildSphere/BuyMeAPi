import { useState } from "react";
import TextInput from "../../commons/TextInput";
import SignInHeader from "../../components/signInHeader";
import CustomButton from "../../commons/Button";

const SignUp = () => {
    const [username, setUsername] = useState("buymeapi.com/");

    const onEnterUsername = (inputValue: string) => {
        if (inputValue.length >= "buymeapi.com/".length) {
            setUsername(inputValue);
        }
        // setEmail(inputValue);
    };

    return (
        <div className="h-screen w-full flex flex-col">
            <SignInHeader text={"Already have an account?"} name={"Sign in"} route={"/"} />
            <div className="flex flex-col items-center justify-center ">
                <div className="w-full max-w-md p-6">
                    <h2 className="text-2xl sm:text-3xl font-bold">Create your account </h2>
                    <h4 className="text-slate-500">Choose a username for your page.</h4>
                    <div className="py-4">
                        <TextInput
                            type="signUp"
                            placeHolder="Email"
                            value={username}
                            validate={true}
                            onChange={(e) => onEnterUsername(e)}
                        />
                    </div>
                    <div className="py-4">
                        <CustomButton name="Sign Up" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
