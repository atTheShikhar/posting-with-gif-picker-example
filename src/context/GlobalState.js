import React, { useState } from 'react'
import { GlobalContext } from './Context'

function GlobalState(props) {
  const [postDialogOpen,setPostDialogOpen] = useState(false);
  const [gifDialogOpen,setGifDialogOpen] = useState(false);
  const [posts,setPosts] = useState([]);

  const value = {
    postDialogOpen,setPostDialogOpen,
    gifDialogOpen,setGifDialogOpen,
    posts,setPosts
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
