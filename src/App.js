import './App.css';
import React, { useState, useEffect} from 'react'

function App() {

  const [gif,setGif] = useState('')

  const fetchGif = async () => {
    const res = await fetch('https://api.giphy.com/v1/gifs/random?api_key=ek76WGVKA3uAZn6bCuU346Vvdf2EFdbh')
    const data = await res.json()
    console.log('data: ', data.data.images.original.url)
    setGif(data.data.images.original.url)
  }

  useEffect(() => {
    fetchGif()
  }, [])

  return (
    <div className="giphy-main">
      <h1>Giphy</h1>
      <button onClick={fetchGif}>Make API Call Again</button>
      <h2>Use Giphy to pull some giphs</h2>
      <div>
        <img className="gif-img" src={gif ? gif : ''}/>
        </div>
    </div>
  );
}

export default App;
