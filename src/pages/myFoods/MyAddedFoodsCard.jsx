import React from "react";
import { Link } from "react-router-dom";

const MyAddedFoodsCard = ({ myFood }) => {
  const {
    _id,
    image,
    foodName,
    category,
    quantity,
    price,
    email,
    name,
    foodOrigin,
    description,
  } = myFood;
  return (
    <div>
      <div>
        <div className="card card-compact lg:w-[25rem] lg:h-[10] w-[22rem] flex flex-col border">
          <figure className="">
            <img className="w-[100%]" src={image} />
          </figure>
          <div className="card-body flex flex-grow justify-end ml-4">
            <span className="card-title font-bold text-2xl">{foodName}</span>
            <span className="font-semibold text-base">Price: {price} $</span>

            <span className="font-semibold text-base">
              Quantity: {quantity}
            </span>
            <span className="font-semibold text-base">
              Food Origin: {foodOrigin}
            </span>
            <div className="card-actions justify-start">
              <Link to={`/my-foods/update/${_id}`}>
                <button className="px-6 py-3 font-bold rounded-full bg-primaryColor text-white text-base mt-2 mb-2">
                  Update
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddedFoodsCard;
