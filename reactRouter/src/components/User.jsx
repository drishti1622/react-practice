import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="border border-gray-300 rounded-md bg-gray-700 m-2 text-white font-bold text-3xl text-center p-4">
      User : {id}
    </div>
  );
}

export default User;
