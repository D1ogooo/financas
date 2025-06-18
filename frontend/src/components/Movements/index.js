import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Movements({ data }) {
  const [mostrarValor, setMostraValor] = useState(false);

  function visualizarValor() {
    setMostraValor(!mostrarValor);
  }

  function transformarEmMoeda(dinheiro) {
    return dinheiro.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <TouchableOpacity onPress={visualizarValor} style={styles.container}>
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {mostrarValor ? (
          <Text style={data.type === 1 ? styles.value : styles.expenses}>
            {data.type === 1
              ? `${transformarEmMoeda(data.value)}`
              : `-${transformarEmMoeda(data.value)}`}
          </Text>
        ) : (
          <View style={styles.skeleton}></View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dadada",
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },

  date: {
    color: "#dadada",
    fontWeight: "bold",
  },

  label: {
    fontWeight: "bold",
    fontSize: 16,
  },

  value: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },

  expenses: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },

  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#dadada",
    borderRadius: 8,
  },
});
