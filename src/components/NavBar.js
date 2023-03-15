import logo from '../images/logo.png'
import TogglerBtn from './TogglerBtn'
import Cart from './Cart'
function NavBar() {

  return (
    <>
      <nav class="navbar navbar-dark blackbg fixed-top menu">
        <div class="container-fluid">
          <TogglerBtn />
          <a class="navbar-brand m-auto" href="index.html"><img src={logo} width="100px" alt="navlogo"></img></a>
          <Cart />
        </div>
      </nav>
    </>
  )
}

export default NavBar