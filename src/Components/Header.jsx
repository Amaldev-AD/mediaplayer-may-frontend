import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand>
            <Link style={{textDecoration:"none",color:'black', fontWeight:'500'}} to={'/'}>
            <i style={{fontSize:'28px'}} class="fa-solid fa-circle-play"></i>  Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
