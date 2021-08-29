import React,{useContext} from 'react';
import styles from './GifPicker.module.css';
import useFetchGif from '../hooks/useFetchGif';
import { GlobalContext } from '../context/Context';


function GifPicker(props) {
  const [gifData,search,setSearch] = useFetchGif("");
  const {post,setPost} = props;
  const { setGifDialogOpen } = useContext(GlobalContext);

  console.log(gifData);

  return (
    <div className={styles.container}>
      {/* Sends a fetch request for every value change,not the optimal way, can be optimized*/}
      <input type="text" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
      <div className={styles.gifContainer}>
        {
          gifData === null
          ? (<div>Fetching Trending GIFs...</div>) 
          : (typeof(gifData) === "string") 
            ? (<div>{gifData}</div>) 
            : (
                gifData.map(item => (
                  <div key={item.id} onClick={async () => {
                    await setPost({...post,gifUrl: item.original_url,gifTitle: item.title})
                    await setGifDialogOpen(false)
                  }}>
                    <img src={item.preview_url} width="100%" alt={item.title}/>
                  </div>
                ))
              )
        }
      </div>
    </div>
  )
}

export default GifPicker
