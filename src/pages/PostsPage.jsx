import React, {useState} from 'react';
import PostList from "../components/PostList";
import PostItem from "../components/PostItem";
import ModalPopup from "../components/ModalPopup";

const PostsPage = () => {


    const [popupVisible, setPopupVisible] = useState(false)

    const openPopup = () => {
        setPopupVisible(true)
    }
    return (
        <div>

            <div className={'py-10 flex '}>
                <div className={'w-[70%]'}>
                    <PostList/>
                </div>
                <div className={'w-1/4 flex flex-col items-center'}>
                    <div className={'flex flex-col items-center border-4 px-10 py-[62px] m-5 rounded-2xl bg-pink-50 hover:scale-105 duration-300'}>
                        <div className={'font-bold text-2xl py-5'}>Create your own post!</div>
                        <button
                            className={'w-1/2 bg-purple-200 py-1 text-xl font-bold rounded-xl  hover:scale-105 duration-300 hover:bg-purple-400'}
                            onClick={openPopup}
                        >Create post
                        </button>
                    </div>
                </div>
                {popupVisible && <ModalPopup setPopupVisible={setPopupVisible}/>}
            </div>
        </div>
    );
};

export default PostsPage;