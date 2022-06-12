import React, { useEffect } from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "./query/company";

function App() {
  const { data, loading, error } = useQuery(GET_DATA);
  // const [q, setq] = useState([]);
  console.log(data, loading, error);
  useEffect(() => {}, [data]);

  return <div className="App">sdfsdf</div>;
}

export default App;
