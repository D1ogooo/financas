import styled from 'styled-components/native';

export const ContainerStyle = styled.View`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  margin-top: -24px;
  margin-left: 14px;
  margin-right: 14px;
  border-radius: 4px;
  padding-top: 22px;
  padding-bottom: 22px;
  z-index: 99;
`;

export const ItemStyle = styled.View``;

export const ItemTitleStyle = styled.Text`
  font-size: 20px;
  color:rgb(218, 218, 218);
`;

export const ContentStyle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BalanceTextStyle = styled.Text`
  font-size: 22px;
  color: #2ecc71;
`;

export const ExpensesTextStyle = styled.Text`
  font-size: 22px;
  color: #e74c3c;
`;
