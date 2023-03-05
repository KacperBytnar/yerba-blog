import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    //let name = 'Mario';
    const [blogs, setBlogs] = useState([
        { title: "Health benefits of drinking yerba", body: "Lorem Ipsum...", author: "Mario Kumar", id: 1 },
        { title: "Bitter Yerba Mate World", body: "Lorem Ipsum...", author: "Mateista", id: 2 },
        { title: "How to Brew Yerba Mate: A Step-by-Step Guide - mateista", body: "Lorem Ipsum...", author: "Mateista", id: 3 },

    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id!== id);
        setBlogs(newBlogs);
    }


    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Mateista")}title="Mateista's Blog"/>

        </div>
     );
}
 
export default Home;