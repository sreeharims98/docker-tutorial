import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch("http://localhost:4000/");
    const jsonData = await response.json();
    setData(jsonData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      <div>
        {data.map((d) => (
          <h3 key={d.title}>{d.title}</h3>
        ))}
      </div>
    </>
  );
}

export default App;
