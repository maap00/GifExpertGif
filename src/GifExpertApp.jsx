import React,{useState} from 'react'
import '../src/index.css'
import {AddCategory,GetGifs} from './Components';
// import {GetGifs} from './Components/Grid';


function GifExpertApp() {
  const [category, setcategory] = useState([]);
  
  
  const onNewCategory = (newCategory)=>{
    // Valida si se ingresa mismo contenido lo no lo inserta
    if(category.includes(newCategory))return (alert('Exist the content added!'));

    setcategory([ newCategory, ...category ])

    // console.log(newCategory)
  }
  return (
    <>
    <h1>GifExpertApp</h1>

    <AddCategory onNewCategory={onNewCategory} />

     
    <>
      {
        category.map(cat => (
          <GetGifs category={cat} key={cat}/>
          ))
      }      
    </>

    </>
  )
}

export default GifExpertApp