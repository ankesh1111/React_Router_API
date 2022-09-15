import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getData = () => {
  return fetch(`https://reqres.in/api/users?page=2`).then((res) => res.json());
};

function Products() {
  const [data, setData] = useState({});

  useEffect(() => {
    getData().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {data &&
        data?.data?.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/products/${item.id}`}>{item.first_name}</Link>
            </div>
          );
        })}
    </div>
  );
}
export default Products;
