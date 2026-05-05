import { useState, useEffect } from "react";
import "./ImagePagination.css";

const ImagePaginationServerWay = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedPage, selectedPageHandler] = useState(1);

  useEffect(() => {
    fetchProducts(selectedPage);
  }, [selectedPage]);

  const fetchProducts = async (selectedPage) => {
    let data = await fetch(
      `https://dummyjson.com/products?skip=${selectedPage * 10 - 10}&limit=10`
    );
    data = await data.json();
    console.log(data);
    setProducts(data?.products);
    setTotal(data?.total);
  };

  return (
    <>
      <div className="products">
        {products?.length > 0 &&
          products.map((product) => {
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
          key={0}
          style={
            selectedPage === 1 ? { opacity: 0, pointerEvents: "none" } : {}
          }
        >
          ◀
        </span>
        {Array(Math.ceil(total / 10))
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
          key={11}
          style={
            selectedPage === Math.ceil(total / 10)
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
export default ImagePaginationServerWay;
