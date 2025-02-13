import { useState, useEffect } from "react";
export default function useFetchList(url) {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    async function getData() {
      setLoader(true);
      let resp = await fetch(url);
      let data = await resp.json();
      console.log(data);
      setLoader(false);
      setList([...data]);
    }
    getData();
  }, []);
  return [list, loader];
}
