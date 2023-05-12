import React, {useState} from 'react';
import GenerateTextCaptcha from "../utils/GenerateTextCaptcha";
import MyInput from "./UI/MyInput";



const CaptchaComponent = ({setCorrect,correct}) => {
    const [captcha, setCaptcha] = useState(GenerateTextCaptcha)
    const [captcha_value, setCaptcha_Value] = useState('')
    const checkCaptcha = () => {
        if(captcha_value === captcha) {
            setCorrect(true)
        }
        else {
            setCorrect(false)
        }
    }

    return (
        <div className={'max-w-sm border-2 border-pink-100 rounded-2xl p-4'}>
            <div>
                <div className={'flex items-center pb-5 w-[300px]'}>
                    <div className={'text-xl'}>
                        Enter captcha: <span className={'font-bold '}>{captcha}</span>
                    </div>
                </div>

                <MyInput
                    value={captcha_value}
                    onChange={(event) => setCaptcha_Value(event.target.value)}
                    type="text"
                    placeholder={'Enter'}

                />
                {correct === false && <div className={'text-red-400 text-md font-bold'}>Captcha incorrect</div>}
                {correct && <div className={'text-green-400 text-md font-bold'}>Captcha correct</div>}
                <button
                    className={'bg-green-300 mt-5 p-2 rounded-2xl font-bold text-xl w-[100px] '}
                    onClick={checkCaptcha}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default CaptchaComponent;