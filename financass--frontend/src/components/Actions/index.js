import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ActionButtonStyle, AreaButtonStyle, ContainerStyle, LabelButtonStyle } from "./style";

export default function Actions() {
  return (
    <View>
      <ContainerStyle
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <ActionButtonStyle>
          <AreaButtonStyle>
            <AntDesign name="addfolder" size={26} color={"#000"} />
          </AreaButtonStyle>
          <LabelButtonStyle>Entradas</LabelButtonStyle>
        </ActionButtonStyle>

        <ActionButtonStyle>
          <AreaButtonStyle>
            <AntDesign name="tagso" size={26} color={"#000"} />
          </AreaButtonStyle>
          <LabelButtonStyle>Compras</LabelButtonStyle>
        </ActionButtonStyle>

        <ActionButtonStyle>
          <AreaButtonStyle>
            <AntDesign name="creditcard" size={26} color={"#000"} />
          </AreaButtonStyle>
          <LabelButtonStyle>Carteira</LabelButtonStyle>
        </ActionButtonStyle>

        <ActionButtonStyle>
          <AreaButtonStyle>
            <AntDesign name="barcode" size={26} color={"#000"} />
          </AreaButtonStyle>
          <LabelButtonStyle>Boletos</LabelButtonStyle>
        </ActionButtonStyle>

        <ActionButtonStyle>
          <AreaButtonStyle>
            <AntDesign name="setting" size={26} color={"#000"} />
          </AreaButtonStyle>
          <LabelButtonStyle>Conta</LabelButtonStyle>
        </ActionButtonStyle>
      </ContainerStyle>
    </View>
  );
}
