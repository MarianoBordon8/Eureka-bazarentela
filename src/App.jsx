import Item from "./components/ItemListContainer"
import NavBar from "./components/NavBar"




function App() {
  return (
  <div>
    <NavBar />
    <Item
      greeting="Eureka - Bazar en tela"
    />
  </div>
  );
}

export default App;
