import { useState, useEffect } from "react";
export interface TypeInterface {
  name: string;
  url: string;
}
export const useFilterData = () => {
  const API_DEFAULT_URL: string =
    process.env.REACT_APP_API + "type?limit=20&offset=0" || "";
  const [types, setTypes] = useState<TypeInterface[]>([]);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      getTypes();
    }
    return () => {
      unmounted = true;
    };
  }, []);

  const getTypes = async () => {
    fetch(API_DEFAULT_URL)
      .then((res) => res.json())
      .then((data) => {
        setTypes(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { types };
};
