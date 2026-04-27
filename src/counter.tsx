import { useState } from 'react';

export default function Counter({ title = "Counter" }) {
  const [count, setCount] = useState(0);

  const getCountColor = () => {
    if (count > 10) return 'text-red-600 animate-pulse';
    if (count > 5) return 'text-orange-1000 animate-pulse';
    if (count > 0) return 'text-yellow-500';
    return 'text-indigo-600'; // Default color at 0
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center border border-gray-100">
      <div className="mb-8">
        <p className="text-lg text-gray-600 mb-2 font-medium">{title}</p>
        
        {/* Dynamic Color applied here using template literals */}
        <h2 className={`text-6xl font-bold transition-colors duration-300 ${getCountColor()}`}>
          {count}
        </h2>
      </div>

      <div className="flex gap-2 justify-center">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold shadow-md active:scale-95"
          onClick={() => setCount(count + 5)}
        >
          + 5
        </button>
        
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-semibold shadow-md active:scale-95 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          − 1
        </button>

        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all font-semibold shadow-md active:scale-95"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}