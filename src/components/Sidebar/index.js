import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Me</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHdTc72idKKCQ/profile-displayphoto-shrink_200_200/0/1616198082711?e=1634774400&v=beta&t=Y7oAYjpZKeqVuL4ST_wNZ_YEvRKYE4DHaJh1sQMzSVM" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Edema Ukabi. I am a software developer specializing in Front end developement....:)</p>
                </div>
            </Card>

            {/* <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card> */}

            {/* <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                {/* <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div> */}

            {/* </Card> */}
      </div>
    //  */}
   )

 }

export default Sidebar