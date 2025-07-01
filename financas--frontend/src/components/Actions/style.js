import styled from "styled-components/native";

export const ContainerStyle = styled.View`
  flex-direction: row;
  max-height: 95px;
  margin-bottom: 14px;
  margin-top: 18px;
  padding-left: 20px;
  margin-left: 20px;
  padding-right: "20px";
`;

export const ActionScrollStyle = styled.ScrollView`
  max-height: 95px;
  margin-bottom: 14px;
  margin-top: 18px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ActionButtonStyle = styled.TouchableOpacity`
  align-items: center;
  margin-right: 32px;
`;

export const AreaButtonStyle = styled.View`
  background-color: #ecf0f1;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const LabelButtonStyle = styled.Text`
  margin-top: 4px;
  text-align: center;
  font-weight: bold;
`;
