import {useEffect, useState} from "react";
import CarsPageOne from './CarsPageOne'
import CarsPageTwo from './CarsPageTwo'
import Car from './Car'
import CreateCar from './CreateCar'


function AppExample() {
  const [idCar, setIdCar] = useState(null)
  const [currentPage, setCurrentPage] = useState(<CarsPageOne setIdCar={setIdCar}/>)

  useEffect(() => {
    if(idCar) {
      setCurrentPage(<Car id={idCar}/>)

    }
  }, [idCar])

  return (
    <div className="wrap">
      <div className="controls">
        <button
          className="button"
          onClick={() => setCurrentPage(<CarsPageOne setIdCar={setIdCar}/>)}
          >
            Страница 1
        </button>

        <button
          className="button"
          onClick={() => setCurrentPage(<CarsPageTwo/>)}
          >
            Страница 2
        </button>

        <button
          className="button"
          onClick={() =>
            setCurrentPage(<CreateCar setCurrentPage={setCurrentPage}/>)}
          >
            Создать Автомобиль
        </button>

      </div>

      {currentPage}
    </div>
  )
}


export default AppExample;
