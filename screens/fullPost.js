import React, {useEffect} from 'react';
import styled from "styled-components/native";
import {Text, View} from "react-native";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

const FullPostScreen = ({ route, navigation }) => {
    const { title, publishedAt, imgUrl } = route.params;

    const setTitle = () => {
        navigation.setOptions({
            title,
        });
    }

    useEffect(setTitle, []);

    const noImg = 'https://kartinkof.club/uploads/posts/2022-12/1670493543_kartinkof-club-p-kartinki-net-8.jpg';
    const normDate = new Date(publishedAt);

    return (
        <View>
            <PostImage source={{ uri: imgUrl || noImg }} />
            <PostText>
                {title}
            </PostText>
            <Text
                style={{
                    marginTop: 15,
                }}
            >
                {normDate.toLocaleString()}
            </Text>
        </View>
    );
};

export default FullPostScreen;