import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFoodsDetails from './AllFoodsDetails';

const AllFoods = () => {
  const allFoods = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter foods based on the search query
  const filteredFoods = allFoods.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[100%]">
      <h1 className="text-center font-bold text-4xl mt-16 mb-10">Foods</h1>
      
      {/* Search Bar */}
      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Search foods by name..."
          className="input input-bordered w-1/2 text-lg p-4 focus:outline-[#f55353] focus:border-[#ffffff]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Display Filtered Foods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <AllFoodsDetails
              key={food._id}
              allFoods={food}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-xl text-gray-500">No foods found.</p>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
