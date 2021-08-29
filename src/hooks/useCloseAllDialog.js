import { useContext } from "react";
import { GlobalContext } from '../context/Context';

const useCloseAllDialog = () => {
  const {
    postDialogOpen,setPostDialogOpen,
    gifDialogOpen,setGifDialogOpen,
  } = useContext(GlobalContext);

  const closeAll = async () => {
    await setPostDialogOpen(!postDialogOpen)
    if(gifDialogOpen) await setGifDialogOpen(false);
  }

  return closeAll;
}

export default useCloseAllDialog;