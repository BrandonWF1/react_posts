import React, {useState} from 'react';

const CaptchaComponent = () => {
    const [captcha, setCaptcha] = useState('')
    const [captcha_value, setCaptcha_Value] = useState('')
    const [captcha_correct, setCaptcha_correct] = useState(false)
    const generate = () => {
        let captcha = ''
        const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 6; i++) {
            captcha += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
        }
        setCaptcha(captcha)
    }
    const checkCaptcha = (event) => {
        if (captcha_value === captcha) {
            setCaptcha_correct(true)
        }
        else
        {
            setCaptcha_correct(false)
        }
    }



    return (
        <div>
            <div>
                <div className={'flex items-center pb-5 w-[300px]'}>
                    <div className={'w-full'}>
                    <button
                        className={'border-2 p-1 border-pink-200 rounded bg-pink-200 font-bold text-xl hover:scale-105 duration-300'}
                        onClick={generate}
                    >Generate captcha:
                    </button>
                    </div>
                    <div className={'font-bold text-xl'}>
                        {captcha}
                    </div>
                </div>

                <input
                    value={captcha_value}
                    onChange={(event) => {
                        setCaptcha_Value(event.target.value)
                    }
                    }
                    type="text"
                    placeholder={'Enter captcha to create post'}
                    className={'font-bold w-full border-2 border-black rounded-xl p-1'}
                />
            </div>
        </div>
    );
};

export default CaptchaComponent;