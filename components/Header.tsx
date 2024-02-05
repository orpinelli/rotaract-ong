'use client'
import styled from 'styled-components';
import * as React from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';

const Search = dynamic(() => import('./Search'), { ssr: false });

const Logo = styled(Image)`
  max-width: 100%; 
  height: auto; 
  margin: 16px;

  @media (max-width: 600px) {
    width: 110px; 
  }
  @media (min-width: 601px) and (max-width: 1024px) {
    width: 300px; 
  }
  @media (min-width: 1025px) {
    width: 400px; 
  }
`;

const Container = styled.header`
  justify-content: center;
`;

const ContainerLogo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: row;
  background-color: #000000;
`;

export default function Header() {
  return (
    <Container>
      <ContainerLogo className='bg-black d-flex'> 
        <Logo 
          src={"/Rotaract.png"} 
          width={400}
          height={400} 
          alt={""}/>
        <Logo 
          src={"https://araras.sp.gov.br/assets/img/content/logo-branco.png"} 
          width={400}
          height={400}
          alt={""}/>
      </ContainerLogo>
      <Search />
    </Container>
  );
}
