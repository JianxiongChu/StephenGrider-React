import CarForm from "./components/CarForm";
import CarList from "./components/CarList.js";
import CarValue from "./components/CarValue";
import CarSearch from "./components/CarSearch";

const App = () => {
  return (
    <div>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};
export default App;
