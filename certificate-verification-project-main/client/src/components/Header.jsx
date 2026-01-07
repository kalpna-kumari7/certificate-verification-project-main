import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <NavLink className="navbar-brand">
                <div className="logo-icon">
                    <i className="fas fa-certificate"></i>
                </div>
                Certify
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a href={"/"} className="nav-link">Home</a>
                    </li>
                  
                    <li className="nav-item">
                        <a href={"/#about"} className="nav-link" >About Developer</a>
                    </li>
                    <li className="nav-item">
                        <a href={"/#contact"} className="nav-link" >Contact</a>
                    </li>
                </ul>
                <div className="d-flex gap-2">
                    <NavLink to={"/auth/login"} className="btn btn-login">Login</NavLink>
                    <NavLink to={"/auth/register"} className="btn btn-register">Register</NavLink>
                </div>
            </div>
        </div>
    </nav>

    </>
  )
}
export default Header