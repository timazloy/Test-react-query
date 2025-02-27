import { useQuery } from "@tanstack/react-query";
import { getCars } from "./api/cars";

export default function CarsPageOne({setIdCar}) {
  const carsQuery = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });

  if (carsQuery.status === "loading") return <h1>Loading...</h1>
  if (carsQuery.status === "error") {
    return <h1>{carsQuery.error}</h1>
  }


  return (
    <div>
      <h1>Cars Page 1</h1>
      <div className="table">
        {carsQuery.data?.map(car => (
          <div onClick={() => setIdCar(car.id)} className="row" key={car.id}>
            <div className="cell">{car.id}</div>
            <div className="cell">{car.brand}</div>
            <div className="cell">{car.model}</div>
            <div className="cell">{car.year}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
