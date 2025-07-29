import "./styles.css";
import NexisLogo from "./Nexis.png";

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-bar"> <img src={NexisLogo} alt="logo" className="weather-logo" />
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
    </div>
  );
}
