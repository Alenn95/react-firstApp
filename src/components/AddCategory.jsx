import { useState } from 'react';


export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setinputValue] = useState('');


    const onInputChange = ({ target }) => {
        setinputValue(target.value);
        // console.log(inputValue);

    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <=1)return;
      
        onAddCategory(inputValue);
        setinputValue('');

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                placeholder="Buscar Gif's"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
