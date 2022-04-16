
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Suples Delivery'}>

      </ItemListContainer>
    </div>
  );
}

export default App;
