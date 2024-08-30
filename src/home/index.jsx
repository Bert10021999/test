import { useState } from "react";
import {hanldeTwoDecimal} from "../common/format";

const Home = ()=> {
    const [amount, setAmount] = useState(0);
    const[fee, setFee] = useState(0);
    const[rAmount, setRAmount] = useState(0);
    const handleAmount = (e)=>{
        const value = e.target.value;
        setAmount(value);
    }
    const handleTotal = () =>{
        // simple computation
        const totalFee = amount * 0.075;
        const receivableAmount = amount * 0.02;
        const totalReceivable = amount - receivableAmount;
        setFee(totalFee);
        setRAmount(totalReceivable);
    }
    return(
        <div>
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-500 to-purple-600">
            {/* Title with Design */}
            <h1 className="text-3xl font-bold text-white bg-opacity-75 bg-blue-800 p-4 rounded-lg shadow-lg mb-8 text-center w-full max-w-md">
            ATE LANI  CASH-IN
            </h1>

            <div className="grid grid-cols-1 gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <section className="flex flex-col md:flex-row items-center justify-between md:justify-center">
                <label className="w-full md:w-1/3 text-left md:text-right mb-1 md:mb-0 pr-2 text-gray-800" htmlFor="amount">
                    Amount:
                </label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Type Amount"
                    onChange={handleAmount}
                    className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 bg-white focus:border-blue-500 focus:outline-none"
                />
                </section>

                <section className="flex flex-col md:flex-row items-center justify-between md:justify-center">
                <label className="w-full md:w-1/3 text-left md:text-right mb-1 md:mb-0 pr-2 text-gray-800" htmlFor="fee">
                    Fee:
                </label>
                <input
                    type="text"
                    value={hanldeTwoDecimal(fee)}
                    className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 bg-white"
                    disabled={true}
                />
                </section>

                <section className="flex flex-col md:flex-row items-center justify-between md:justify-center">
                <label className="w-full md:w-1/3 text-left md:text-right mb-1 md:mb-0 pr-2 text-gray-800" htmlFor="receivable">
                    Receivable Amount:
                </label>
                <input
                    type="text"
                    value={hanldeTwoDecimal(rAmount)}
                    className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 bg-white"
                    disabled={true}
                />
                </section>
            </div>

            <div className="text-center mt-8">
                <button className="btn btn-info" onClick={handleTotal}>
                Calculate
                </button>
            </div>
            </div>
        </div>
    )
}
export default Home;
