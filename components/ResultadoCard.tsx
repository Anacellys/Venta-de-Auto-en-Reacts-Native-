import { colors } from "@/constants/styles";
import { Resultado } from "@/hooks/useVentaAuto";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  resultado: Resultado;
}

export function ResultadoCard({ resultado }: Props) {

  const { costo, impuesto, granTotal, letraMensual,
          limiteCredito, aprobado, formaPago } = resultado;

  return (
    <View style={s.card}>
      <Text style={s.titulo}>Resumen</Text>

      <FilaResultado label="Costo del auto"  valor={`$${costo.toFixed(2)}`} />
      <FilaResultado label="ITBM (7%)"       valor={`$${impuesto.toFixed(2)}`} />
      <FilaResultado
        label="Gran total"
        valor={`$${granTotal.toFixed(2)}`}
        destacado
      />

      {/* Solo muestra esto si fue a crédito */}
      {formaPago === "credito" && letraMensual !== null && limiteCredito !== null && (
        <>
          <View style={s.separador} />
          <FilaResultado label="Letra mensual (108 cuotas)" valor={`$${letraMensual.toFixed(2)}`} />
          <FilaResultado label="30% de tu salario"          valor={`$${limiteCredito.toFixed(2)}`} />

          <View style={[s.estadoBox, aprobado ? s.aprobado : s.rechazado]}>
            <Text style={[s.estadoTexto, aprobado ? s.aprobadoTxt : s.rechazadoTxt]}>
              {aprobado ? "✓  APROBADO" : "✗  NO APROBADO"}
            </Text>
            <Text style={[s.estadoSub, aprobado ? s.aprobadoTxt : s.rechazadoTxt]}>
              {aprobado
                ? `Tu cuota cabe dentro de tu presupuesto`
                : `La cuota supera el 30% de tu salario`}
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

// ─── Subcomponente interno ────────────────────────────
function FilaResultado({ label, valor, destacado = false }:
  { label: string; valor: string; destacado?: boolean }) {
  return (
    <View style={[s.fila, destacado && s.filaBorde]}>
      <Text style={[s.filaLabel, destacado && s.filaLabelBold]}>{label}</Text>
      <Text style={[s.filaValor, destacado && s.filaLabelBold]}>{valor}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  card:         { backgroundColor: colors.blanco, borderRadius: 14, padding: 18, borderWidth: 1, borderColor: colors.borde, marginTop: 24 },
  titulo:       { fontSize: 15, fontWeight: "600", color: colors.texto, marginBottom: 12 },
  fila:         { flexDirection: "row", justifyContent: "space-between", paddingVertical: 7 },
  filaBorde:    { borderTopWidth: 1, borderTopColor: colors.borde, marginTop: 4, paddingTop: 12 },
  filaLabel:    { fontSize: 14, color: colors.textoMuted },
  filaLabelBold:{ fontWeight: "600", color: colors.texto },
  filaValor:    { fontSize: 14, color: colors.texto },
  separador:    { height: 1, backgroundColor: colors.borde, marginVertical: 10 },
  estadoBox:    { marginTop: 14, padding: 14, borderRadius: 10, alignItems: "center" },
  aprobado:     { backgroundColor: colors.aprobado },
  rechazado:    { backgroundColor: colors.rechazado },
  estadoTexto:  { fontSize: 16, fontWeight: "700" },
  estadoSub:    { fontSize: 12, marginTop: 4 },
  aprobadoTxt:  { color: colors.aprobadoTxt },
  rechazadoTxt: { color: colors.rechazadoTxt },
});