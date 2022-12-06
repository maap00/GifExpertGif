export const FetchApiGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=6AI8L7VEdLsHWrNzVqnGKm9WMznJhPWk&q=${category}&limit=20`;
  // const url = `https://api.giphy.com/v1/gifs/random?api_key=6AI8L7VEdLsHWrNzVqnGKm9WMznJhPWk&q=marco&limit=20`;
  // const url = 'https://api.unsplash.com/photos/?client_id=2Q9YTOpCywLIDiUD5hlEf_8ynnSK11m6hd6Kr1MOPXc';
  const resp = await fetch(url);
  const {data} = await resp.json();

  const gif = data.map(img => ({
      title: img.title,
      id: img.id,
      url: img.images.downsized_medium.url


  }));
  // console.log(gif)
  return gif
 
}
  
