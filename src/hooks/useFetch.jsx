import { useEffect, useState } from "react"

export let useFetch = (url) => {
    let [data, setData] = useState(null)
    let [loading, setLoading] = useState(null)
    let [error, setError] = useState(null)

    useEffect(() => {
        let getData = async () => {
            try{
                setLoading(true)
                let res = await fetch(url)
                if(!res.ok){
                    throw new Error("Something went wrong")
                }

                let data = await res.json()
                setData(data)

            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        getData()
    }, [url])
    return {data, loading, error}
}