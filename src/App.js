import { useState, useEffect } from "react";
import Header from "./components/header/header";
import Medicines from "./components/medicines/medicines";
// import Search from "./components/search/search";
import CompanyData from "./components/data/items";
import "./App.css";
import styles from "./components/search/search.module.css";

//on page load, get our hardcoded medicines from a file
import originalMedicines from "./medicines.json";

function App() {
  const [medicines] = useState(originalMedicines);
  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  useEffect(() => {
    setFilteredSearch(
      medicines.filter(
        (medicine) =>
          medicine.name.toLowerCase().includes(search.toLowerCase()) ||
          medicine.company.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, medicines]);

  return (
    <>
      <Header>
        <div className={styles.root}>
          <input
            type="text"
            aria-label="search"
            className={styles.search}
            placeholder="filter meds"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </Header>

      <div className="mild-defaults">
        <Medicines medicines={filteredSearch} onChange={Medicines} />
        <span>
          {filteredSearch.map((medicine, index) => {
            return (
              <CompanyData
                name={medicine.name}
                company={medicine.company}
                key={index}
              />
            );
          })}
        </span>
      </div>
    </>
  );
}

export default App;
