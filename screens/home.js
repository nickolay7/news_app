import {useEffect, useState} from "react";
import axios from "axios";
import {Alert, FlatList, RefreshControl, TouchableOpacity} from "react-native";
import {Post} from "../components/posts/post";
import Loading from "../components/loading/loading";

export default function HomeScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = () => {
        setLoading(true);
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(({ data }) => {
                setData(data.articles);
            }).catch(() => {
            console.log('Ошибка получения данных');
            Alert.alert('Ошибка', 'Не удалось получить данные!');
        }).finally(() => {
            setLoading(false);
        })
    }

    useEffect(fetchData, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <FlatList
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData} />}
            data={data}
            renderItem={
                ({item}) => {
                    const normDate = new Date(item.publishedAt);

                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('fullPost', {
                            title: item.title,
                            imgUrl: item.urlToImage,
                            publishedAt: item.publishedAt,
                        })}>
                            <Post
                                imgUrl={item.urlToImage}
                                date={normDate.toLocaleString()}
                                title={item.title}
                            />
                        </TouchableOpacity>
                    );
                }
            }
        />
    );
}
