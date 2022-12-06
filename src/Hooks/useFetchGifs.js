import React, { useEffect, useState } from 'react'
import {FetchApiGif} from '../API/ApiGif';

export const useFetchGifs = (category) => {

  const [newImg, setnewImg] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () =>{
    const newImages= await FetchApiGif(category);
    setnewImg(newImages)   
    setIsLoading(false)   
  }

  useEffect(()=>{
    getImages()
  },[])

  return {
    newImg,
    isLoading
  }
}
