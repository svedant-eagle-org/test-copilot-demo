import { useState, useEffect } from "react";
import "./ImagePagination.css";

const ImagePaginationUIWay = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedPage, selectedPageHandler] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let data = await fetch("https://dummyjson.com/products?limit=100");
    data = await data.json();
    console.log(data);
    setProducts(data?.products);
    setTotal(data?.total);
  };

  return (
    <>
      <div className="products">
        {products?.length > 0 &&
          products
            .slice(selectedPage * 10 - 10, selectedPage * 10)
            .map((product) => {
              return (
                <span className="products__single" key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <span>{product.title}</span>
                </span>
              );
            })}
      </div>
      <div className="pagelist">
        <span
          className="pagelist__page"
          onClick={(e) => selectedPageHandler(selectedPage - 1)}
          style={
            selectedPage === 1 ? { opacity: 0, pointerEvents: "none" } : {}
          }
        >
          ◀
        </span>
        {Array(total / 10)
          .fill(0)
          .map((itm, index) => {
            return (
              <>
                <span
                  key={index}
                  className="pagelist__page"
                  style={
                    selectedPage === index + 1
                      ? { backgroundColor: "gray" }
                      : {}
                  }
                  onClick={(e) => selectedPageHandler(index + 1)}
                >
                  {index + 1}
                </span>
              </>
            );
          })}
        <span
          className="pagelist__page"
          onClick={(e) => selectedPageHandler(selectedPage + 1)}
          style={
            selectedPage === total / 10
              ? { opacity: 0, pointerEvents: "none" }
              : {}
          }
        >
          ▶
        </span>
      </div>
    </>
  );
};
export default ImagePaginationUIWay;
