import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COMPANY_RELATIONS } from "./query/companyRelations";
import { GET_FILTERED_POSITION } from "./query/companyPositions";
import { MyPaper } from "./query/app.styled";

function App() {
  const { data: data2 } = useQuery(GET_FILTERED_POSITION, {
    variables: { value: "Director" },
  });

  const { data, loading } = useQuery(GET_COMPANY_RELATIONS);
  const [entity, setEntity] = useState([]);
  // const [q, setq] = useState([]);

  console.log(entity, data2);

  useEffect(() => {
    if (!loading) {
      const { applicantIndividualCompanyRelations } = data;
      setEntity(applicantIndividualCompanyRelations.data);
    }
  }, [data]);

  return (
    <div className="App">
      <MyPaper>asdas</MyPaper>
    </div>
  );
}

export default App;
