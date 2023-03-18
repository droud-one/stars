import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Search = (props: { searchHandler: Function } & any) => {
    const [search, setSearch] = React.useState('');

    const onSearch = () => props.searchHandler(search);

    return (<Box data-testid="search-box" component="form" noValidate  autoComplete="off" {...props}>
        <TextField id="search-input" label="Search" variant="standard" onChange={(e) => setSearch(e.target.value)} />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={onSearch}><SearchIcon /></IconButton>
      </Box>);
};

export default Search;