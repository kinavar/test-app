import React, {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchFile = async () => {
        const res = await fetch('/file/boo.json');
        const data = await res.json();

        setData(data);
      }

      fetchFile();

  }, [])

  return (
    <div className="App">
      {data.map(elem => <p>{elem.name}</p>)}
    </div>
  );
}

export default App;
