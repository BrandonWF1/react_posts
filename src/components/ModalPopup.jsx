import React, {useState} from 'react';
import CaptchaComponent from "./CaptchaComponent";
import MyInput from "./UI/MyInput";
import CloseIcon from "./UI/CloseIcon";
const ModalPopup = ({setPopupVisible, createNewPost}) => {

    const [title_value, setTitle_value] = useState('')
    const [body_value, setBody_value] = useState('')
    const [correct, setCorrect] = useState(null)

    const createPost = () => {
        const newPost = {
            id: Date.now(),
            title: title_value,
            body: body_value,
            date: new Date().toLocaleDateString()
        }
        createNewPost(newPost)
        setPopupVisible(false)
    }

    return (
        <div className={'top-0 left-0 bg-black bg-opacity-50 fixed w-full h-full'}>
            <div
                className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-2xl rounded-2xl py-4 px-4'}>
                <div
                    className={'flex justify-end mb-2'}
                    onClick={() => setPopupVisible(false)}
                    >
                    <CloseIcon/>
                </div>
                <div className={'flex'}>
                    <div className={'w-1/2'}>
                        <MyInput
                            onChange={(event) => setTitle_value(event.target.value)}
                            value={title_value}
                            type="text"
                            placeholder={'Title'}
                        />
                        <MyInput
                            onChange={(event) => setBody_value(event.target.value)}
                            value={body_value}
                            type="text"
                            placeholder={'Description'}
                        />
                        {correct && <button
                            className={'w-5/6 mt-5 bg-purple-300 px-4 py-4 rounded-2xl hover:scale-105 hover:bg-purple-400 duration-300 block font-bold text-xl'}
                            onClick={createPost}
                            >Create
                            post
                        </button>}
                    </div>
                    <div className={'w-1/2'}>
                        <CaptchaComponent
                            setCorrect={setCorrect}
                            correct={correct}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPopup;