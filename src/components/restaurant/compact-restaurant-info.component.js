import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import { Text } from "../typography/text.component";

const CompactViewAndroid = styled.View`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  overflow: hidden;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  overflow: hidden;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      <CompactViewAndroid>
        <Image source={{ uri: restaurant.photos[0] }} />
      </CompactViewAndroid>
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
