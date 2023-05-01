import axios, {AxiosRequestConfig} from "axios"

interface data {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}



export const getData = async (config: AxiosRequestConfig) => {
    try{
        const res = await axios.get<data[]>("https://jsonplaceholder.typicode.com/photos?_limit=10&page_3",config)
        res.data.map((item) => console.log(item.title))
    } catch (error) {

    }
}

