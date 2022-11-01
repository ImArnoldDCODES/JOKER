import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'


function App() {
  const [data, setData] = useState({})
  const [make, setMake] = useState(false)

  // useEffect(() => {
  //   axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode')
  //   .then(res => setData(res.data))
  // }, []);
  // console.log(data)

  const control = () => {
    axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode')
      .then(res => setData(res.data))
      setMake(true)
  }

  return (
    <div className="App">
      <div>
        <h1 className='text-[3rem]'>Jokes</h1>
      </div>

      <div className='mt-40'>
        <h2>{data.setup}</h2>
        <h3>{data.delivery}</h3>
      </div>

      <button onClick={control} className={make ? 'hidden' : 'mt-10'}>SEE</button>
      <button onClick={control} className={make ? 'mt-10 bg-[#749128] p-2' : 'hidden'}>NEXT</button>
    </div>
  );
}

export default App;
