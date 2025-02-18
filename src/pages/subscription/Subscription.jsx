import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  addMinutes, addDays } from "date-fns";

const Subscription = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(1);
  const navigate = useNavigate();

  const subscriptionOptions = [
    { label: "1 Minute (Test)", value: 1, type: "minute", price: 1 },
    { label: "5 Days", value: 5, type: "days", price: 10 },
    { label: "10 Days", value: 10, type: "days", price: 18 },
  ];

  const handleSubscription = () => {
    const selectedOption = subscriptionOptions.find(
      (option) => option.value === selectedPeriod
    );
    // console.log(selectedOption.price)
    
    let premiumEnd;
    if (selectedOption.type === "minute") {
      premiumEnd = addMinutes(new Date(), selectedOption.value);
    } else {
      premiumEnd = addDays(new Date(), selectedOption.value);
    }

    

    // Navigate to payment page
    navigate(`/subscription/payment/${selectedOption.price}`, { state: { amount: selectedOption.price, expiredDate:selectedOption.value } });
  };

  return (
    <div className="subscription-page bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="banner bg-blue-400 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Get Premium Access Now!</h1>
        <p className="mt-4 text-lg">Choose a subscription plan and enjoy exclusive benefits.</p>
      </div>

      <div className="subscription-content max-w-3xl mx-auto p-6 bg-white shadow-md mt-6">
        <h2 className="text-2xl font-semibold mb-4">Select Subscription Plan</h2>

        <div className="mb-4">
          <label htmlFor="subscription" className="block text-gray-700 font-medium mb-2">
            Choose your subscription period:
          </label>
          <select
            id="subscription"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(Number(e.target.value))}
          >
            {subscriptionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} - ${option.price}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSubscription}
          className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Take Subscription
        </button>
      </div>
    </div>
  );
};

export default Subscription;


