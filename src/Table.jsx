import React from "react"

function Table({ data, page }) {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full table-zebra'>
        <thead>
          <tr>
            <th></th>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, current_price, market_cap, image }, i) => (
            <tr key={id} className='hover'>
              <th>{i + 1 + (page - 1) * 100}</th>
              <td className='flex flex-row'>
                <img
                  loading='lazy'
                  src={image}
                  alt={id}
                  className='w-6 h-6 mr-6'
                />
                {name}
              </td>
              <td>${current_price}</td>
              <td>${market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
