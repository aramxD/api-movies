import {  useEffect, useState } from "react";
import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3'

const API_KEY = '8ac7684dd09df55c1e0b47396e892b7b'

export function useMovies( API_USE){
    const [data, setData] = useState()
    
    useEffect(()=>{
        axios.get(API_URL + API_USE + API_KEY).then((response)=>{
            //console.log(response.data.results)
            setData(response.data)
        })
        
    },[])
    
    return [data, setData]
}