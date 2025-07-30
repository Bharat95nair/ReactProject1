import React, { useState,useEffect } from 'react';
import productsData from './products.json';

export default function StateAssignment9() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  console.log("SearchTerm:", searchTerm);

  useEffect(() => {
    setCurrentPage(1); 
  }, [searchTerm, selectedCategory, sortOrder]);


  let filteredProducts = productsData
    .filter(product =>
      product.title?.toLowerCase().includes(searchTerm.toLowerCase())

    )
    .filter(product =>
      selectedCategory ? product.category === selectedCategory : true
    );


  if (sortOrder === 'asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }


  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    
    <>
        <div className="row mb-3">
            <div className="col-md-4 mb-2">
            <input type="text" className="form-control" placeholder="Search products..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
            </div>
            <div className="col-md-3 mb-2">
                <select
                    className="form-select" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                    <option value=''>All Categories</option>
                    <option value="men's clothing"> Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value='jewelery'>Jewelery</option>
                    <option value='electronics'>Electronics</option>
                </select>
            </div>
            <div className="col-md-5 d-flex gap-2">
            <button className="btn btn-outline-secondary" onClick={() => setSortOrder('asc')}>Sort Price ↑</button>
            <button className="btn btn-outline-secondary" onClick={() => setSortOrder('desc')}>Sort Price ↓</button>
            </div>
        </div>

        <div className="row">
            {currentProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="card-text">${product.price}</p>
                    <p className="text-muted" style={{ fontSize: '0.85rem' }}>{product.category}</p>
                </div>
                </div>
            </div>
            ))}
        </div>

        <nav>
            <ul className="pagination justify-content-center">
            {[...Array(totalPages)].map((_, index) => (
                <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(index + 1)}
                >
                <button className="page-link">{index + 1}</button>
                </li>
            ))}
            </ul>
        </nav>
    </>

  );
}
