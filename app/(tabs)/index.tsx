import {
  RadioGroup
} from "@/components/RadioGroup";
import {
  ResultadoCard
} from "@/components/ResultadoCard";
import {
  shared
} from "@/constants/styles";
import {
  useVentaAuto
} from "@/hooks/useVentaAuto";
import {
  ScrollView, Text, TextInput, TouchableOpacity
} from "react-native";

export default function VentaAutoScreen() {

  const {
    costo, salario, transmision, formaPago, resultado,
    setCosto, setSalario, setTransmision, setFormaPago,
    calcular, reiniciar,
  } = useVentaAuto();

  return (
    <ScrollView contentContainerStyle={shared.container}>

      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center", marginBottom: 8 }}>
        Venta de Auto
      </Text>

      {/* Costo */}
      <Text style={shared.label}>Costo ($)</Text>
      <TextInput
        style={shared.input}
        placeholder="Ej: 15,000.00"
        keyboardType="decimal-pad"
        value={costo}
        onChangeText={setCosto}
      />

      {/* Transmisión */}
      <Text style={shared.label}>Transmisión</Text>
      <RadioGroup
        opciones={[
          { valor: "manual",     etiqueta: "Manual" },
          { valor: "automatica", etiqueta: "Automática  (+$1,500.00)" },
        ]}
        valorActual={transmision}
        onChange={setTransmision}
      />

      {/* Forma de pago */}
      <Text style={shared.label}>Forma de pago</Text>
      <RadioGroup
        opciones={[
          { valor: "contado", etiqueta: "Contado" },
          { valor: "credito", etiqueta: "Crédito" },
        ]}
        valorActual={formaPago}
        onChange={setFormaPago}
      />

      {/* Salario: SOLO visible si elige crédito */}
      {formaPago === "credito" && (
        <>
          <Text style={shared.label}>Salario mensual ($)</Text>
          <TextInput
            style={shared.input}
            placeholder="Ej: 1,200.00"
            keyboardType="decimal-pad"
            value={salario}
            onChangeText={setSalario}
          />
        </>
      )}

      {/* Botón calcular */}
      <TouchableOpacity style={shared.boton} onPress={calcular}>
        <Text style={shared.botonTexto}>Calcular</Text>
      </TouchableOpacity>

      {/* Resultados */}
      {resultado && <ResultadoCard resultado={resultado} />}

      {/* Botón reiniciar (solo si ya calculó) */}
      {resultado && (
        <TouchableOpacity
          style={[shared.boton, { marginTop: 12, backgroundColor: "#6b7280" }]}
          onPress={reiniciar}
        >
          <Text style={shared.botonTexto}>Nueva consulta</Text>
        </TouchableOpacity>
      )}

    </ScrollView>
  );
}