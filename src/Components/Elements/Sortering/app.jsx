import React, { useState, useEffect } from 'react';
import AllRestaurant from '../GetResturant/allResturant.jsx';
import Pagination from './Pagination';
import axios from 'axios';


const Mainsite = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const url = 'http://localhost:1337/api/restaurants/?populate=*'
            const result = await axios.get(url)
            console.log(result.data.data);
            setPosts(result.data.data);
            setLoading(false);
        }
        getData()
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div >
            {/* //Henter blogs med props loading */}
            <AllRestaurant posts={currentPosts} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Mainsite;