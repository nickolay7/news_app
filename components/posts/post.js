import styled from "styled-components/native";

const PostView = styled.View`
  padding: 15px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  flex-direction: row;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 10px;
`;

const PostDetails = styled.View`
  justify-content: center;
  flex: 1;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const noImg = 'https://kartinkof.club/uploads/posts/2022-12/1670493543_kartinkof-club-p-kartinki-net-8.jpg';

const truncateTitle = (str) => {
    if (str.length >= 50) return str.substring(0,50) + '...';

    return str;
}

export const Post = ({ imgUrl, title, date }) => (
    <PostView>
        <PostImage source={{uri: imgUrl || noImg}} />
        <PostDetails>
            <PostTitle>{truncateTitle(title)}</PostTitle>
            <PostDate>{date}</PostDate>
        </PostDetails>
    </PostView>
)