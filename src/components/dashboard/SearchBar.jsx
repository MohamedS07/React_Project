import "./SearchBar.css";

function SearchBar() {
  return (
    <Box className="search-bar-container">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search..."
        size="small"
        className="search-field"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchBar;
