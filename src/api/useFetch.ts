import axios from 'axios'
import {useState, useEffect} from 'react'

export interface Item {
    userId: number,
     
}

export const useFetch = (url: string, _start: number) => {
    const [data, setData] = useState([])
    const [loading, setLoadning] = useState<boolean>(false)
    const [error, setError] = useState()

    useEffect(() => {
      setLoadning(true)

      setTimeout(() => {
        axios.get(url,{
            params: {
                _start,
                limit: 10,
            }
        })
        .then(res => setData(res.data))
        .catch(setError)
        .finally(()=>{
            setLoadning(false)
        })
      }, 1000);

    }, [url,_start])
    return {
        loading,
        data,
        error
    }
}
