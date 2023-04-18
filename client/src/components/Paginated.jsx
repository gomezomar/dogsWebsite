import React from "react";

export default function Paginated({countriesPerPage, allCountries, paginated }) {
  const pagNums = [];
  
  for (let i = 0; i < Math.ceil(allCountries/countriesPerPage); i++) {
    pagNums.push(i + 1)  ;
  }

  return(
    <nav>
        <ul>
            {pagNums &&
            pagNums.map(number => (
                <li key={number}>
                <a onClick={() => paginated(number)} >{number}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}