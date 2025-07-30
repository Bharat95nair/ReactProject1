import React from 'react'
import productArr from './product.json'

export default function TableProductList() {
  return (
    <>
     <h3 className="mb-4">Product Table</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price ($)</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {productArr.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>
                  <img
                    src={prod.image}
                    alt={prod.title}
                    height="80"
                    style={{ objectFit: 'contain' }}
                  />
                </td>
                <td>{prod.title}</td>
                <td>{prod.description}</td>
                <td>{prod.price.toFixed(2)}</td>
                <td>{prod.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
