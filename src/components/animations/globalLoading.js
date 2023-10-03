import styled from "styled-components/native";
import LottieView from "lottie-react-native";

const LoadingBackground = styled.ImageBackground.attrs({
  source: require("../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 85%;
  position: absolute;
  top: 20px;
  padding: ${(props) => props.theme.space[2]};
`;

export const Cover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const GlobalLoading = () => {
  return (
    <LoadingBackground>
      <Cover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          resizeMode="cover"
          source={require("../../../assets/Loading.json")}
        />
      </AnimationWrapper>
    </LoadingBackground>
  );
};
