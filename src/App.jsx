import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import EnhancedTable from "./components/MuiTable";

function App() {
  const urlBase = "https://api.stackexchange.com/";
  const urlPath = "2.3/tags?order=desc&sort=popular&site=stackoverflow";

  const [tagsData, setTagsData] = useState([]);
  // Stany dla pobierania danych z API 0 - pobieranie, 1 - dane pomyslnie pobrane, -1 - error w pobieraniu danych
  const [processState, setProcessState] = useState(0);
  const [errorInfo, setErrorInfo] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const url = urlBase + urlPath;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setTagsData(data.items);
          setProcessState(1);
        })
        .catch((err) => {
          console.log(`An error occurred: ${err}`);
          setProcessState(-1);
          setErrorInfo(err.message);
        });
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(processState);
  }, [processState]);

  return (
    <>
      <main>
        {processState === -1 ? (
          <div className="alert">
            <Alert variant="filled" color="error" severity="error">
              {errorInfo}
            </Alert>
          </div>
        ) : processState === 1 ? (
          <EnhancedTable apiData={tagsData} />
        ) : (
          <div className="alert">
            <CircularProgress color="success" size={"10em"} />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
