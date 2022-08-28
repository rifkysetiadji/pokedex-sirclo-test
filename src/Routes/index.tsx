import { Routes, Route, Link } from "react-router-dom";
import PokedexList from "../Pages/Pokedex/List";
import Layout from "../Components/Layout";
function Index() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PokedexList />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
function NoMatch() {
  return (
    <div data-testid="page-wrong">
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default Index;
