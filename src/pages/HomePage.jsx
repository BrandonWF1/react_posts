import React from 'react';



const HomePage = () => {

    // const posts = useSelector(state => state.postList)
    // console.log(posts)
    // const randomIndexPost = Math.floor(Math.random() * posts.postList.length)
    // const randomPost = posts.postList[randomIndexPost]
    //
    // if (!randomPost) {
    //     return (
    //         <div>Loading...</div>
    //     )
    // }


    return (
        <div >
            <div className={'py-10 flex justify-evenly'}>
                <div className={'border-4 rounded-3xl border-purple-300 p-8'}>
                    <div className={'text-4xl mb-5 font-bold'}><span className={'text-[#8118ff]'}>POST</span> OF THE DAY</div>
                    <div className={'w-[500px] h-[300px] border-8 border-[#8118ff] border-opacity-65 rounded-2xl'}>
                        {/*<img className={'rounded-2xl'} src={videos.videosList.preview} alt={'logo'}/>*/}
                        {/*{randomPost.title}*/}
                    </div>
                </div>
                <div className={'border-4 rounded-3xl border-purple-300 p-8'}>
                    <div className={'text-4xl mb-5 font-bold'}><span className={'text-[#8118ff]'}>VIDEO</span> OF THE DAY</div>
                    <div className={'w-[500px] h-[300px] border-8 border-[#8118ff] border-opacity-65 rounded-2xl'}></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;