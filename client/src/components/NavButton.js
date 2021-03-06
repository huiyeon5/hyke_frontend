import React from 'react';
import {Link} from 'react-router-dom';

const NavButton = (props) => {
  return (
    <Link to={props.destination} className="py-2 px-6 lg:py-3 lg:px-10 xl:py-3 xl:px-10 border border-orange-500 rounded mr-6 text-center align-middle leading-normal bg-orange-500 text-white">
      {props.buttonName}
    </Link>
  );
};

export default NavButton;