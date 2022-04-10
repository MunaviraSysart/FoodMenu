import { Nav, Container, Navbar, Button } from 'react-bootstrap';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { MdFoodBank } from 'react-icons/md';
import { FoodList } from './Components/FoodList';
import { SelectedFoodList } from './Components/SelectedFoodList';


function App() {
  const user = localStorage.getItem('user');

  return (
    <BrowserRouter>
      <div>
        <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
          <Container fluid>
            <Navbar.Brand href="#home">
              <MdFoodBank size='35px' style={{ marginTop: '-10px' }} /><b>FoodBook</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="#">About Us</Nav.Link>
                <Button className='btn_select' variant="dark" as={Link} to="/items">Select Your Plans</Button>

              </Nav>
              {
                user ?
                  <Button variant="outline-dark" as={Link} to="/logout" onClick={() =>{
                    localStorage.clear();
                    window.location.href = '/';
                  }}>Sign Out</Button> :
                  <Button variant="outline-dark" as={Link} to="/login">Sign In</Button>
              }

            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/items' element={<FoodList props={user} />} />
            <Route path='/selectedItems' element={<SelectedFoodList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
