"use client";

import { gradient } from "@/components/Gradient";
import { useEffect } from "react";
import styled from 'styled-components';
import Link from "next/link";
import Image from "next/image";


const Container = styled.main`
  background: #000405;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;


const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 4px;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
`;

const Logo = styled(Image)`
  max-width: 100%;
  height: auto;
  margin: 16px;

  @media (max-width: 600px) {
    width: 150px;
  }
  @media (min-width: 601px) and (max-width: 1024px) {
    width: 220px;
  }
  @media (min-width: 1025px) {
    width: 260px;
  }
`;

const Footer = styled.div`
  background-color: #1D2B3A;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  background-color: #0D2247;
  justify-content: center;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: white;
  border-radius: 9999px;
  transition: background-color 0.3s ease;
  box-shadow: 0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1);
  &:hover {
    background-color: #090637;
  }
`;

const IconWrapper = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const Title = styled.h1`
font-size: 8vw;
text-transform: uppercase;
text-align: center;
line-height: 1;
width: 60%;

@media (min-width: 601px) and (max-width: 1024px) {
  font-size: 5vw;
}
@media (min-width: 1025px) {
  font-size: 6vw;
}
`

const Span = styled.span`
font-family: 'Work Sans', sans-serif;
@supports (background-clip: text) or (-webkit-background-clip: text) {
  background-image: 
    url("data:image/svg+xml,%3Csvg width='2250' height='900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='%2300A080' d='M0 0h2255v899H0z'/%3E%3Ccircle cx='366' cy='207' r='366' fill='%2300FDCF'/%3E%3Ccircle cx='1777.5' cy='318.5' r='477.5' fill='%2300FDCF'/%3E%3Ccircle cx='1215' cy='737' r='366' fill='%23008060'/%3E%3C/g%3E%3C/svg%3E%0A");
  background-size: 110% auto;
  background-position: center;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
`

const WrapperTitle = styled.div`
font-size: 3vw;
position: relative;
top: -150px;
background: #000405;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-family: 'Work Sans', sans-serif;
font-weight: 900;
`

const SubTitle = styled.h2`
font-weight: 900;
font-family: 'Work Sans', sans-serif;
position: relative;
top: -70px;
font-size: 1.5vw;
text-align: center;
line-height: 1;
background-size: 110% auto;
background-position: center;
color: transparent;
-webkit-background-clip: text;
background-clip: text;
color: #efefef;
`

const Text = styled.p`
font-weight: 500;
width: 70%;
font-family: 'Work Sans', sans-serif;
position: relative;
top: -60px;
font-size: 1.2vw;
text-align: center;
line-height: 1;
background-size: 110% auto;
background-position: center;
color: transparent;
-webkit-background-clip: text;
background-clip: text;
color: #efefef;

`

export default function Home() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
      <Container>
        <Wrapper>
        <WrapperTitle>
        <Title>faça a diferença ajudando uma
           <Span > ONG, </Span> 
            Seja esperança
        </Title> 
        </WrapperTitle>
              <SubTitle>O que é? Por que esse site foi feito?</SubTitle>
              <Text>A criação deste espaço online  dedicado às organizações da cidade de Araras foi motivada pelo anseio de unir esforços, inspirar colaborações e dar visibilidade às organizações locais que, muitas vezes, operam nos bastidores, longe dos holofotes. Sendo um elo entre aqueles que buscam fazer a diferença e as organizações que moldam o presente e o futuro de cada pessoa que passam por ela. 
Que este espaço não seja somente uma lista de orgs e sim um convite caloroso para que residentes, visitantes e simpatizantes se envolvam, apoiem e celebrem o notável trabalho que acontece em cada canto da cidade, construindo assim laços mais fortes, cultivando empatia e inspirando ações. 
Juntos somos parte de algo extraordinário.</Text>
          <div className="flex gap-16 mt-12 md:mt-0">
              <Link href="/ong">
                <StyledLink>
                  <IconWrapper>
                  <Logo 
                    src={"/amor-proprio.png"} 
                    width={400}
                    height={400} 
                    alt={""}/>
                  </IconWrapper>
                  VEJA AS ONG
                </StyledLink>
              </Link>
          </div>
        </Wrapper>
        <Footer>
          <LogoContainer>
          <Link  href="https://www.instagram.com/ararasdepre/" target="_blank">
          <Logo 
            src={"/Rotaract.png"} 
            width={450}
            height={400} 
            alt={""}/>
           </Link >
            <Link  href="https://www.instagram.com/rotaractararas/" target="_blank">
            <Logo 
            src={"https://araras.sp.gov.br/assets/img/content/logo-branco.png"} 
            width={400}
            height={400}
            alt={""}/>
            </Link >
          </LogoContainer>
        </Footer>
      </Container>
  );
}
