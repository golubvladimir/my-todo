import { Navbar as NavbarB, Container, Nav } from "react-bootstrap"

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  return (
    <NavbarB className="mb-3" bg="light" variant="light">
      <Container>
        <Nav>
          <Nav.Link href="/">List</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Container>
    </NavbarB>
  )
}