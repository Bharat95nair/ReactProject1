import React from 'react'
import productArr from './product.json'

export default function ProductCards() {
  return (
    <>
      <h3 className="mb-4">Product Cards</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productArr.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: '300px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <span className="fw-bold"><i class="bi bi-currency-dollar"></i>{product.price}</span>
                <span className="badge bg-secondary">{product.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div> 
    </>
  )
}
