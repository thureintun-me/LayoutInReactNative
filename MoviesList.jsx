import {FlatList, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {Tent} from "lucide-react-native";
import PlaceHolder from "./PlaceHolder";

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);
    const getTrendingMoviesList = async () =>{
      const response = await  fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",{
            headers:{
                Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
            }
        })
        const respJson = await response.json()
        setMoviesList(respJson.results)
        console.log("Resp Json",respJson)
    }

    useEffect(() => {
        getTrendingMoviesList()
    }, []);
    return(
        <View>
            <FlatList data={moviesList} renderItem={({item,index})=>{
                console.log("Item",item)
                return (
                    <PlaceHolder item={item.title}  />
                )
            }} />
        </View>
    )
}



export  default  MoviesList