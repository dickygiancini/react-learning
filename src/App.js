import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favourite";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}></Route>
        <Route path='/new-meetup' element={<NewMeetupPage />}></Route>
        <Route path='/favourite' element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
