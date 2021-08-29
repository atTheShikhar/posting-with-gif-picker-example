import React, { useContext } from 'react';
import { GlobalContext } from '../context/Context';
import useCloseAllDialog from '../hooks/useCloseAllDialog';
import CreatePostsModal from './CreatePostsModal';
import styles from './Header.module.css';

function CreatePosts(props) {
  const { postDialogOpen } = useContext(GlobalContext);

  const closeAll = useCloseAllDialog();

  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={() => {closeAll()}}>
        Compose Posts
      </div>

      <div className={styles.button}>
        Photo/Video Album
      </div>

      <div className={styles.button}>
        Live Video
      </div>
      {
        postDialogOpen 
        ? <CreatePostsModal/> 
        : <></>
      }
    </div>
  )
}

export default CreatePosts
