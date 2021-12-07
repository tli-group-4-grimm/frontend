import { Car, CarBuyer } from "../entities";
import { Link} from "react-router-dom";


function Enterbutton(props: { creditScore: number; downpayment: number; pytBudget: number; car: Car | undefined;}) {
    if (props.creditScore != 0 && props.downpayment != 0 && props.pytBudget != 0 && typeof props.car !== "undefined") {
      return <button
      type="submit"
      className="bg-blue-400 text-3xl rounded-lg text-center m-6 py-6 px-20 transform hover:text-white hover:bg-blue-800 hover:scale-105 duration-300 ease-in-out"
    >
      <Link
        to="/dashboard"
        state={{
          car: props.car,
          carBuyer: new CarBuyer(props.pytBudget, props.creditScore, props.downpayment),
        }}
      >
        Enter
      </Link>
    </button>
    }
    return <h1></h1>
  }

  export default Enterbutton;