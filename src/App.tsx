import React, { useEffect, useState } from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_COMPANY_RELATIONS } from "./query/companyRelations";
import { GET_FILTERED_POSITION } from "./query/companyPositions";

function App() {
  const { data: data2 } = useQuery(GET_FILTERED_POSITION);

  const { data, loading } = useQuery(GET_COMPANY_RELATIONS, {
    variables: { value: "Director" },
  });
  const [entity, setEntity] = useState([]);
  // const [q, setq] = useState([]);

  console.log(entity, data2);

  useEffect(() => {
    if (!loading) {
      const { applicantIndividualCompanyRelations } = data;
      setEntity(applicantIndividualCompanyRelations.data);
    }
  }, [loading]);

  return <div className="App">sdfsdf</div>;
}

export default App;
