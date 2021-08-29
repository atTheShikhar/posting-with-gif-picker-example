import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context';
import styles from './Posts.module.css';

function Posts() {
  const {posts} = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      {
        posts?.length > 0 
        ? (
          posts?.map((post,index) => (
            <div key={index} className={styles.postContainer}>
              <div className={styles.postText}>
                {post?.text}
              </div>
              {
                post?.gifUrl?.length > 0 
                ? <img src={post?.gifUrl} alt={post?.gifTitle} className={styles.postImage}/>
                : <></>
              }
            </div>
          )))
        : (<div className={`${styles.postContainer} ${styles.noPost}`}>No Posts Yet!</div>)
      }
    </div>
  )
}

export default Posts
