import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/action/user.action";

export default function Navbar() {
  const cartReducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartReducer;
  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          PROJET E-COMMERCE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto">
            {currentUser ? (
              <div class="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i
                    style={{ color: "white" }}
                    className="fa fa-user"
                    aria-hidden="true"
                  ></i>{" "}
                  {currentUser.nom_utilisateur}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/profile">
                    Profil
                  </Link>
                  <Link className="dropdown-item" to="/admin">
                    Options
                  </Link>
                  <Link className="dropdown-item" to="/listeutilisateurs">
                    Liste des utilisateurs
                  </Link>
                  <li
                    className="dropdown-item"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Déconnexion <i class="fas fa-sign-out-alt"></i>
                  </li>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Connexion
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/panier">
                <i class="fas fa-shopping-cart"></i> {cartItems.length}
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
