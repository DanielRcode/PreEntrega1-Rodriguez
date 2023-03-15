import userIcon from '../images/usericon.png'
function TogglerBtn() {
    return (
        <>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <img src={userIcon} alt="usericon" width="50px"></img><h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Clothing Store - Welcome!</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Index</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Women</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Men</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="careers.html">Kids</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Pets</a>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default TogglerBtn