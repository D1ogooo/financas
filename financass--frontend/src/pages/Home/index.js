import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
import { ContainerStyle, ListStyle, TitleStyle } from './style'
import { api } from '../../services/http'

// export const lista = [
//   {
//     id: 1,
//     label: "Boleto conta luz",
//     value: 150,
//     date: "08/06/2025",
//     type: 0, // despesas
//   },
//   {
//     id: 2,
//     label: "Boleto conta luz",
//     value: 150,
//     date: "08/06/2025",
//     type: 0, // despesas
//   },
//   {
//     id: 3,
//     label: "Boleto conta luz",
//     value: 150,
//     date: "08/06/2025",
//     type: 0, // despesas
//   },
//   {
//     id: 4,
//     label: "Pix Cliente Carlos",
//     value: 200,
//     date: "08/06/2025",
//     type: 1, // receita
//   },
//   {
//     id: 5,
//     label: "Pix Cliente Carlos",
//     value: 200,
//     date: "08/06/2025",
//     type: 1, // receita
//   },
//   {
//     id: 6,
//     label: "Salário",
//     value: 1350,
//     date: "15/06/2025",
//     type: 1, // receita
//   },
//   {
//     id: 7,
//     label: "Controle de Xbox",
//     value: 250,
//     date: "15/06/2025",
//     type: 0, // gastos
//   },
//   {
//     id: 8,
//     label: "Controle de Xbox",
//     value: 50,
//     date: "15/06/2025",
//     type: 0, // gastos
//   },
//   {
//     id: 9,
//     label: "PIX da Sophia",
//     value: 95,
//     date: "13/06/2025",
//     type: 1, // receita
//   },
//   {
//     id: 10,
//     label: "Pagar o Nicolas",
//     value: 35,
//     date: "13/06/2025",
//     type: 0, // gasto
//   },
//   {
//     id: 11,
//     label: "Pagamento da Ana",
//     value: 200,
//     date: "13/06/2025",
//     type: 1, // gasto
//   },
// ];

export default function Home() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    api.get('/payments/show')
      .then((res) => {
        setLista(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
      });
  }, [])


  function transformarEmDinheiro(dinheiro) {
    return dinheiro.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function calcularReceitas(lista) {
    let soma = 0;

    for (let i = 0; i < lista.length; i++) {
      if (parseInt(lista[i].state) === 1) {
        soma += lista[i].value;
      }
    }

    return soma;
  }

  function calcularGastos(lista) {
    let soma = 0;

    for (let i = 0; i < lista.length; i++) {
      if (parseInt(lista[i].state) === 0) {
        soma += lista[i].value;
      }
    }

    return soma;
  }
  const saldo = calcularReceitas(lista);
  const gasto = calcularGastos(lista);
  const calculo = saldo - gasto;
  console.log("Saldo:", saldo);
  console.log("Gastos:", gasto);

  return (
    <ContainerStyle>
      <Header name="Diogo maçal costa" />
      <Balance
        saldo={transformarEmDinheiro(calculo)}
        gastos={transformarEmDinheiro(gasto)}
      />

      <Actions />

      <TitleStyle>
        Últimas movimentações
      </TitleStyle>

      <ListStyle
        data={lista}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </ContainerStyle>
  );
}