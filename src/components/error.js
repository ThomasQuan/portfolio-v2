import React from "react";

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p className='text-warning'>This is required</p>;
      case "minLength":
        return <p className='text-warning'>Your last name need minmium 2 charcaters</p>;
      case "pattern":
        return <p className='text-warning'>Enter a valid email address</p>;
      case "min":
        return <p className='text-warning'>Minmium age is 18</p>;
      case "validate":
        return <p className='text-warning'>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
}
