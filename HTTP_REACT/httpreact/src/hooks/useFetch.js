import {useState, useEffect} from 'react';

export const useFetch = (url) => {  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // POST
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // DELETE
  const [id, setId] = useState(null);

  const httpConfig = (data, method) => {
    console.log('httpConfig chamado');

    if(method==='POST'){
        setConfig({
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) 
        });

        setMethod(method);
        return
    } else if(method==='DELETE'){ 
        setConfig({
            method,
            headers: {
                "Content-Type": "application/json"
            },
        });

        setMethod(method);  

        console.log('ID->', data);
        setId(data);
    }
  }

  // POST 
  // DELETE
  useEffect(() => {
      async function httpRequest() {
        if (method==='POST') {
            let fetchOptins = [url, config];

            const res = await fetch(...fetchOptins);
            const json = await res.json();

            setCallFetch(json);

        } else if (method==='DELETE') {
            const urlDelete = `${url}/${id}`;

            const res = await fetch(urlDelete, config);
            const json = await res.json();

            setCallFetch(json);
        }
      }
      console.log('useEffect [config, method, url] chamado!');
      httpRequest();
  }, [config, method, url]);

  // GET
  useEffect(() => {
    console.log('useEffect [url, callFetch] chamado!');

    const fetchData = async() => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError("Houve algum erro ao carregar dados!")
      }

      setLoading(false);
    }

    fetchData();
  }, [url, callFetch]);

  return {data, httpConfig, loading, error};
}