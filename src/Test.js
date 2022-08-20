import React, { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([data]);
  const [loading, setLoading] = useState([false]);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(data);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading.....</>;
  };
  return (
    <div>
      {filter.map((item) => (
        <div>{console.log(item.title)}</div>
      ))}
    </div>
  );

  //   {
  //     filter.map((product) => {
  //       return (
  //         <>
  //           <div>asd</div>
  //           <div>asd</div>
  //         </>
  //       );
  //     });
  //   }
};

export default Test;
