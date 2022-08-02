import { useState } from 'react';
import { AddCategory,GifGrid } from './components';


export const GifExtpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    const onAddCategory = (newValue) => {

        if (categories.includes(newValue)) return;


        // Spread : recorrete este categories, copia los elementos, y agregale este nuevo
        setCategories([newValue,...categories])

    }
    return (
        <>
            {/* Titulo */}

            <h1>GifExpertApp</h1>


            {/* Input */}
            <AddCategory onAddCategory={onAddCategory} />


            {
                categories.map(cat => {
                    return (
                        <GifGrid
                            key={cat}
                            category={cat} />
                    )
                })
            }




        </>
    );
};