import {FlatList} from "react-native";
import PlaceHolder from "./PlaceHolder";


const FlatListExample = () => {

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    return(
        <FlatList data={data} renderItem={({item,index})=>{
            return (
                <PlaceHolder item={item}  />
            )
        }} />
    )


}



export  default  FlatListExample