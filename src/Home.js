import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    //let name = 'Mario';
    const [blogs, setBlogs] = useState([
        { title: "Health benefits of drinking yerba", body: "Lorem Ipsum...", author: "Mario Kumar", id: 1 },
        { title: "Bitter Yerba Mate World", body: "Lorem Ipsum...", author: "Mateista", id: 2 },
        { title: "How to Brew Yerba Mate: A Step-by-Step Guide - mateista", body: "Lorem Ipsum...", author: "Mateista", id: 3 },

    ]);

    const [name, setName] = useState('Mateista');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id!== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('Use Effect ran');
        console.log(name);
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        <button onClick={() => setName('Mateista69')}>Change Name</button>
        <p>{name}</p>
        </div>
     );
}
 
export default Home;