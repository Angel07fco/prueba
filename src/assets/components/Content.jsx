import { useState } from "react";

function Content() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Proyecto de prueba</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p></p>
      <p className="read-the-docs">Ángel Francisco Martínez Hernández</p>
      <p className="read-the-docs">Abelardo Hernández Hernández</p>
    </div>
  );
}

export default Content;
