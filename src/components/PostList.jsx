import React, {useState} from 'react';
import PostItem from "./PostItem";
import ModalPopup from "./ModalPopup";

const PostList = ()=> {

    const [value, setValue] = useState('')

    const [popupVisible, setPopupVisible] = useState(false)

    const openPopup = () => {
        setPopupVisible(true)
    }

    const posts = [
        {
            title: 'Title 1',
            body: 'OPIASDFOswkehfgIOSUG',
            date: '05.05.2023',
        },
        {
            title: 'Title 2',
            body: 'ASDasdasdasasasd',
            date: '05.05.2023',
        },
        {
            title: 'Title 3',
            body: 'asddaSAsdsaasd',
            date: '05.05.2023',
        }
    ]




    return (
    <div className={'py-10 flex justify-center'}>
        <div className={'w-3/4'}>
        {
            posts.map(item => <PostItem title={item.title} body={item.body} date={item.date} />)
        }
        </div>
        <div className={'w-1/4'}>
            <button
                onClick={openPopup}
            >open popup</button>
        </div>
        {popupVisible && <ModalPopup setPopupVisible={setPopupVisible}/>}
    </div>
    );
};

export default PostList;