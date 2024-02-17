import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const cars = useSelector((state) => {
    return state.cars;
  });

  const filteredCars = cars.data.filter((car) => {
    return car.name.toLowerCase().includes(cars.searchTerm.toLowerCase());
  });

  const renderedCars = filteredCars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} {car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
