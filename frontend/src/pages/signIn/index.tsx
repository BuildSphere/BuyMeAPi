import { useState } from "react";
import TextInput from "../../commons/TextInput";
import SignInHeader from "../../components/signInHeader";
import CustomButton from "../../commons/Button";
import SignInOption from "../../commons/signInOption";

const SignIn = () => {
    const [email, setEmail] = useState("");

    return (
        <div className="h-screen w-full flex flex-col">
            <SignInHeader text={"Don't have an account?"} name={"Sign up"} route={"/signUp"} />
            <div className="flex flex-col items-center justify-center ">
                <div className="w-full max-w-md p-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                        Welcome back
                    </h2>
                    <div className="py-4">
                        <TextInput
                            placeHolder="Email"
                            value={email}
                            onChange={(e) => setEmail(e)}
                        />
                    </div>
                    <div className="py-4">
                        <CustomButton name="Continue with email" />
                    </div>

                    <div className="flex items-center py-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-3 text-gray-500">or login with</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div className="py-4">
                        {["google", "facebook", "apple", "twitter"]?.map((ele, index) => {
                            return (
                                <div key={index} className="pb-4">
                                    <SignInOption title={ele} />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignIn;
