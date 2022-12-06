import React, {useState} from 'react'

export function AddCategory({onNewCategory}) {

  const [inputValue, setinputValue] = useState([])

  const onInputChange = (e) => {
    setinputValue(e.target.value)
  }

  const onSubmit= (e) =>{
    e.preventDefault();
    if(inputValue.trim().lenght < 1) return;

    onNewCategory(inputValue.trim());
    
    // setcategory(category => [inputValue, ...category ])
    setinputValue('');
      
  }


  return (
    <form onSubmit={onSubmit}>
      <input type="text"
             placeholder='Search Gif'
             value={inputValue}
             onChange={onInputChange} />

      <button onClick={onSubmit}>Search</button>
    </form>
  )
}

