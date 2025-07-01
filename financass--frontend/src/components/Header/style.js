import styled from "styled-components/native";
import { StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight || 20;

export const ContainerStyle = styled.View`
  background-color: #8000ff;
  padding-top: ${statusBarHeight}px;
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 44px;
`;

export const ContentStyle = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UsernameStyle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ButtonUserStyle = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 22px;
`;
