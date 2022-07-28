import React, { useState } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function FilterableProductTable(props) {
  const { products } = props;

  const [filterText, setFilterText] = useState('')
  const handleFilterTextChange = (filterText) => {
    setFilterText(filterText)
  }

  const [inStockOnly, setInStockOnly] = useState(false)
  const handleInStockChange = (inStockOnly) => {
    setInStockOnly(inStockOnly)
  }

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}

export default FilterableProductTable;