'use client'

import ongsData from '../public/ongs.json';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import * as S from './styled';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  height: theme.spacing(62),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexwrap: 'initial',
  display: 'flex'
}));

export default function Card() {

  return (
    <Box margin={2}  display={'flex'}>
      <Grid container spacing={2}>
        {ongsData.map((ongs, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Link href={'/detalhes'} passHref>
              <Item>
                <S.ONGContent>
                  <S.ONGLogo
                    src={ongs.logoUrl}
                    width={400}
                    height={400}
                    alt={`Logo para "${ongs.name}"`}
                  />
                  <S.ONGName>{ongs.name}</S.ONGName>
                  <p>{ongs.description}</p>
                </S.ONGContent>
              </Item>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
