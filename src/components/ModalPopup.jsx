import React, {useState} from 'react';
import CaptchaComponent from "./CaptchaComponent";

const ModalPopup = ({setPopupVisible},{captcha_correct}) => {

    const [title_value, setTitle_value] = useState('')
    const [body_value, setBody_value] = useState('')
    const [post_value, setPost_value] = useState([])
    const handlerPost = () => {
        const newPost ={
            title: title_value,
            body: body_value
        }
        setPost_value([...post_value, newPost]);
        setTitle_value('');
        setBody_value('');
        console.log(post_value)
    }


    return (
        <div className={'top-0 left-0 bg-black bg-opacity-50 fixed w-full h-full'}>
            <div
                className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[35%] h-1/4 rounded-2xl flex'}>
                <button
                    className={'bg-red-50 absolute left-[90%]'}
                    onClick={() => {
                        setPopupVisible(false)
                    }}
                >CLOSE
                </button>
                <div className={'flex justify-center items-center'}>
                    <div className={'flex flex-col items-center justify-center w-1/2 mr-5'}>
                        <div className={'px-5 py-5 text-xl'}>

                            <input
                                onChange={(event) => {
                                    setTitle_value(event.target.value)
                                }}
                                type="text"
                                placeholder={'Title'}
                                className={'border-2 border-black p-1 rounded-xl'}
                                value={title_value}
                            />

                        </div>
                        <div className={'px-5 py-5 text-xl'}>
                            <input
                                onChange={(event) => {
                                    setBody_value(event.target.value)
                                }}
                                type="text"
                                placeholder={'Description'}
                                className={'border-2 border-black p-1 rounded-xl'}
                                value={body_value}
                            />
                        </div>
                    </div>
                    <div className={'w-[300px] flex flex-col items-center'}>
                        <CaptchaComponent/>
                        <div className={'flex flex-col items-center'}>
                            {!captcha_correct && <div className={'text-green-500 font-bold mt-2'}>Captcha wrong</div>}
                            {captcha_correct && <div className={'text-red-500 font-bold mt-2'}>Captcha right</div>}
                            <button
                                className={'bg-green-300 mt-5 p-2 rounded-2xl font-bold text-xl w-[100px] '}
                                // onClick={checkCaptcha}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ModalPopup;