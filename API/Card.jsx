import React from "react";

const Card = (props) => {
  console.log(props.profile_photo);

  return (
    <div className="bg-white p-4 w-64 rounded-lg shadow-lg flex flex-col items-center gap-2">
      <img
        className="h-20 w-20 rounded-full mb-2 object-cover"
        src={props.profile_photo}
        alt="Profile"
      />
      <h1 className="text-lg font-semibold">{props.user}</h1>
      <h2 className="text-gray-600 text-sm">Age: {props.age}</h2>
      <h2 className="text-gray-600 text-sm">Profession: {props.profession}</h2>
      <h2 className="text-gray-600 text-sm mb-2">City: {props.city}</h2>
      <button className="bg-emerald-500 text-white px-3 py-1 rounded-lg hover:bg-emerald-600 text-sm">
        Add Friend
      </button>
    </div>
  );
};

export default Card;
