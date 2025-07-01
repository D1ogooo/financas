import { Feather } from "@expo/vector-icons";
import { ButtonUserStyle, ContainerStyle, ContentStyle, UsernameStyle } from "./style";

export default function Header({ name }) {
  return (
    <ContainerStyle>
      <ContentStyle>
        <UsernameStyle>
         {name}
        </UsernameStyle>

        <ButtonUserStyle>
          <Feather name="user" size={27} color={"#"} />
        </ButtonUserStyle>
      </ContentStyle>
    </ContainerStyle>
  );
}