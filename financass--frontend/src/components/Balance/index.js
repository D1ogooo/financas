
import { ContainerStyle, ItemStyle, ItemTitleStyle, ContentStyle, ExpensesTextStyle } from './style'

export default function Balance({ saldo, gastos }) {
  return (
    <ContainerStyle>
      <ItemStyle>
        <ItemTitleStyle>Saldo</ItemTitleStyle>
        <ContentStyle>
          <ItemTitleStyle style={{ color: "#2aeb4d"}}>{saldo}</ItemTitleStyle>
        </ContentStyle>
      </ItemStyle>

      <ItemStyle>
        <ItemTitleStyle>Gastos</ItemTitleStyle>
        <ContentStyle>
          <ExpensesTextStyle>{gastos}</ExpensesTextStyle>
        </ContentStyle>
      </ItemStyle>
    </ContainerStyle>
  );
}
