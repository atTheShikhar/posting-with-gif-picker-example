import styles from './CreatePostsModal.module.css';
import React, { useState,useContext, useEffect } from 'react'
import profileImage from '../person.png'
import GifPicker from './GifPicker';
import { GlobalContext } from '../context/Context';
import useCloseAllDialog from '../hooks/useCloseAllDialog';

function CreatePostsModal() {
  const closeAll = useCloseAllDialog();

  const {
    gifDialogOpen,setGifDialogOpen,
    posts,setPosts
  } = useContext(GlobalContext);

  const [post,setPost] = useState({
    text: "",
    gifUrl: "",
    gifTitle: ""
  });
  const [isDisabled,setIsDisabled] = useState(false);

  useEffect(() => {
    if(post.text.trim().length === 0 && post.gifUrl.trim().length === 0) 
      setIsDisabled(true);
    else
      setIsDisabled(false);
  },[post.text,post.gifUrl])

  const submitPost = async () => {
    await setPosts([post,...posts]);
    await closeAll();
  }

  return (
    <div className={styles.container}>
      <div>
        <img src={profileImage} alt="profile" />
        <textarea 
          className={styles.textArea} 
          name="postText" 
          id="postText" 
          placeholder="What's in your mind?" 
          rows="6"
          value={post.text}
          onChange={(e) => {setPost((prevPost) => ({...prevPost,text: e.target.value}))}}
        >
        </textarea>
        <button 
          className={styles.closeButton} 
          onClick={() => {closeAll()}}
        >
          X
        </button>
      </div>
      {
        post.gifUrl.length > 0
        ? (<div>
            <img src={post.gifUrl} alt={post.gifTitle} width="100%"/>
          </div>)
        : <></>
      }
      <div className={styles.buttons}>
        <button className={styles.actionButton}>Tag Friend</button>
        <button className={styles.actionButton}>Check In</button>
        <button 
          className={`${styles.actionButton} ${styles.gifButton}`} 
          onClick={() => {setGifDialogOpen(!gifDialogOpen)}}
        >
          GIF
        </button>
        <button className={styles.actionButton}>Tag Events</button>
        {
          gifDialogOpen ? 
          <GifPicker post={post} setPost={setPost}/> :
          <></>
        }
      </div>
      <div className={styles.footer}>
        <button disabled={isDisabled} className={styles.postButton} onClick={submitPost}>Post</button>
      </div>

    </div>
  )
}

export default CreatePostsModal
