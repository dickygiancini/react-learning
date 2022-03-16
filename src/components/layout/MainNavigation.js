import { Link } from "react-router-dom";
import { useContext } from "react";
import FavouritesContext from "../../store/favourite-context";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favouriteContext = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <Link to="/"><div className={classes.logo}>React Meetups</div></Link>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favourite">
              Favourite
              <span className={classes.badge}>{favouriteContext.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
