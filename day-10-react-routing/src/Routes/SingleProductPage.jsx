import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const getData = (id) => {
  return fetch(`https://reqres.in/api/users/` + id).then((res) => res.json());
};

function SingleProductPage() {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    getData(params.id).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [params.id]);

  console.log(data);
  return (
    <>
      <div>
        <h1> USER ID :{params.id}</h1>

        {data && (
          <>
            <img src={data.avatar} alt="" />
            <h3>Name:{`${data.first_name} ${data.last_name}`}</h3>
            <h3>Email:{data.email}</h3>
          </>
        )}
        <Link to="/products">Go Back</Link>
      </div>
    </>
  );
}
export default SingleProductPage;
