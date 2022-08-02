import { useState, useEffect } from "react";
import { getGifs } from '../helpers/helpers';

export const useFetchGifs = (category) => {
  
const [images, setImages] = useState([]);

const [isLoading, setisLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setisLoading(false);
  }

  //este hook se usa para aplicar un efecto despues de renderizar el 
  //elemento es decir, lo que no queres que cambie, las exepciones.
  useEffect(() => {
    getImages();

  }, [])



return{

    images,
    isLoading,
}

}
