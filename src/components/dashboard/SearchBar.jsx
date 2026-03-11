import React from 'react';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import {InputAdornment} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search..."
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ maxWidth: 400 }}
      />
    </Box>
  );
}

export default SearchBar;
