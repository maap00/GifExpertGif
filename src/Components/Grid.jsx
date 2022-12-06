
import {ShowGif} from '../Components'
import {useFetchGifs} from '../Hooks/useFetchGifs'

export const GetGifs = ({category}) => {
  
  // Custom Hooks: Engloba toda la informacion basada en category  
  const {newImg,isLoading} = useFetchGifs(category) 

  return (
    <>
      <h3>{category}</h3>
      {/* AND Logico: Si isLoading esta en true va a ejecurtar la segunda parte de la instruccion */}
      {
        isLoading && (<h2>Loading....</h2>)
      }

      
      <div className='card-grid'>
        {
          newImg.map((gif)=>(
            <ShowGif 
                  key={gif.id} 
                  {...gif}
            />

          ))
        }
      </div>


    </>
  )
}

