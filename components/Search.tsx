'use client'


import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div', { shouldForwardProp: (prop) => prop !== 'isSelected' })<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: isSelected ? alpha('#161A1D', 0.25) : '#c7d7dc',
  '&:hover': {
    backgroundColor: isSelected ? alpha('#161A1D', 0.35) : alpha('#161A1D', 0.1),
  },
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '600px', 
    maxWidth: '600px', 
    borderRadius: "12px",
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%', 
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ToolbarContainer = styled(Box)(({ theme }) => ({
  borderRadius: "12px",
  backgroundColor: 'transparent',
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
}));

export default function SearchAppBar() {
  const [isSelected, setIsSelected] = React.useState(false);

  const handleSelect = () => {
    setIsSelected(true);
  };

  const handleDeselect = () => {
    setIsSelected(false);
  };

  return (
    <ToolbarContainer>
      <Toolbar>
        <Search isSelected={isSelected} onClick={handleSelect} onBlur={handleDeselect}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </ToolbarContainer>
  );
}
