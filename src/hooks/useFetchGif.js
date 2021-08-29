import {useEffect, useState} from 'react';

const BASE_URL = "https://api.giphy.com/v1/gifs/";
const TRENDING_ENDPOINT = `${BASE_URL}trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=10`;
const SEARCH_ENDPOINT = TRENDING_ENDPOINT.replace("trending","search").concat("&q=");


const useFetchGif = (initialValue) => {
  const [search,setSearch] = useState(initialValue);
  const [gifData,setGifData] = useState(null);

  const fetchData = async (link) => {
    try {
      const response = await fetch(link);
      const jsonData = await response.json();
      setGifData(jsonData.data.map(item => (
        {
          id: item?.id, 
          title: item?.title,
          preview_url: item?.images?.preview_gif?.url,
          original_url: item?.images?.original?.url
        }
      )));
    } catch(e) {
      console.log(e);
      setGifData("Unable to fetch GIFs :(")
    }
  }

  useEffect(() => {
    if(search === "") {
      fetchData(TRENDING_ENDPOINT);
    } else {
      fetchData(SEARCH_ENDPOINT+search)
    }
  },[search])

  return [gifData,search,setSearch];
}

export default useFetchGif;