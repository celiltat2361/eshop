import React from 'react'
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Room, Phone, MailOutline } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Description = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 30%;
  margin-bottom: 10px;
  cursor: pointer;
`


const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
/* const Payment = styled.img`` */

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CLL-Mobile.</Logo>
        <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Rerum molestias eaque nulla amet culpa quia perspiciatis, officia natus modi. 
          Sapiente ratione recusandae debitis corrupti optio fuga distinctio atque voluptas reprehenderit.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon> 
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon> 
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Apple</ListItem>
          <ListItem>Samsung</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}} />Dalby/Lund, Sweden-Skåne</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}} />+46 123456789</ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}} />contact@cllmobile.com</ContactItem>
      </Right>
    </Container>
  )
}

export default Footer