import React, {useEffect} from 'react';

import VideosList from "../components/VideosList";
import {useDispatch} from "react-redux";
import {updateVideos} from "../store/Slices/VideosListSlice";
const VideosPage = () => {

    // const videos = useSelector(state => state.videosList)
    const dispatch = useDispatch()

    useEffect(() => {
        const Default = [
            {
                title: 'React Hooks Tutorial',
                description: 'Learn how to use React Hooks to simplify your code and manage state in functional components.',
                date: '2022-01-01',
                author: 'John Smith',
                views: 10000,
                preview: 'https://i.ytimg.com/vi/xDLIsbSx248/maxresdefault.jpg?7857057827'
            },
            {
                title: 'Introduction to Python',
                description: 'Get started with Python programming language and learn the basics of data types, loops, and functions.',
                date: '2022-01-02',
                author: 'Jane Doe',
                views: 5000,
                preview: 'https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/04/Introduction-To-Python-1.jpg'
            },
            {
                title: 'JavaScript Promises',
                description: 'Learn how to use JavaScript Promises to handle asynchronous code and avoid callback hell.',
                date: '2022-01-03',
                author: 'Bob Johnson',
                views: 8000,
                preview: 'https://dmitripavlutin.com/javascript-promises-then-vs-then-catch/cover.png'
            },
            {
                title: 'CSS Grid Layout',
                description: 'Master CSS Grid Layout and create responsive, flexible layouts for your web pages.',
                date: '2022-01-04',
                author: 'Alice Lee',
                views: 7000,
                preview: 'https://www.freecodecamp.org/news/content/images/2022/05/CSS-GRID-3.png'
            },
            {
                title: 'Node.js Basics',
                description: 'Learn the basics of Node.js and create a simple web server with Express.js.',
                date: '2022-01-05',
                author: 'Mike Brown',
                views: 6000,
                preview: 'https://i.ytimg.com/vi/U8XF6AFGqlc/maxresdefault.jpg'
            },
            {
                title: 'Java Programming for Beginners',
                description: 'Get started with Java programming language and learn how to create classes, objects, and methods.',
                date: '2022-01-06',
                author: 'Samantha Green',
                views: 4000,
                preview: 'https://contentstatic.techgig.com/photo/93000110/what-makes-java-still-popular-among-developers.jpg?28608'
            },
            {
                title: 'MongoDB Tutorial',
                description: 'Learn how to use MongoDB, a popular NoSQL database, and create CRUD operations with Mongoose.',
                date: '2022-01-07',
                author: 'David Kim',
                views: 9000,
                preview: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png'
            },
            {
                title: 'React Native Crash Course',
                description: 'Learn how to build mobile apps with React Native and use components like View, Text, and Image.',
                date: '2022-01-08',
                author: 'Emily Chen',
                views: 12000,
                preview: 'https://i.ytimg.com/vi/mkualZPRZCs/maxresdefault.jpg'
            }
        ]
        dispatch(updateVideos(Default))
    }, [])


    return (
        <div className={'py-10 px-10'}>
            <hr/>
            <VideosList/>
        </div>
    );
};

export default VideosPage;