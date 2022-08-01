import { Navbar as NavbarB, Container, Nav } from "react-bootstrap"

export function Navbar() {
  return (
    <NavbarB>
      <Container>
        <Nav>
          <Nav.Link href="/">List</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Container>
    </NavbarB>
  )
}