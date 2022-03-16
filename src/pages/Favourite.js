import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourite-context";

function FavoritesPage() {
  const favouriteContext = useContext(FavouritesContext);

  let content;

  if(favouriteContext.totalFavourites === 0) {
    content = <p>No Favourite yet</p>;
  }
  else {
    content = <MeetupList meetups={favouriteContext.favourites}></MeetupList>
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;