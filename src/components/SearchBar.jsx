function SearchBar({
  search,
  setSearch
}) {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search Candidate..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-input"
      />

    </div>
  );
}

export default SearchBar;