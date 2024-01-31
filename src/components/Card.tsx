'use client'

import ongsData from '../../public/ongs.json'; // Importando o JSON local das ONGs

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import * as S  from './styled'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  height:  theme.spacing(62),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


 
export default function Card() {
  return (
    <Box margin={2} sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 12, md: 16 }}>
        {ongsData.map((ongs, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>        
            <S.ONGContent>
              <S.ONGName>{ongs.name}</S.ONGName>
              <S.ONGCause>{ongs.cause}</S.ONGCause>
              <p>{ongs.description}</p>
            </S.ONGContent>
            <S.ONGLogo src={ongs.logoUrl} alt={`Logo para "${ongs.name}"`} />
          </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}