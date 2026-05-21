import { colors } from "@/constants/styles";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// T puede ser cualquier string literal: "manual"|"automatica", "contado"|"credito", etc.
interface Opcion<T extends string> {
  valor: T;
  etiqueta: string;
}

interface Props<T extends string> {
  opciones:   Opcion<T>[];
  valorActual: T;
  onChange:   (valor: T) => void;
}

export function RadioGroup<T extends string>({ opciones, valorActual, onChange }: Props<T>) {
  return (
    <View style={s.grupo}>
      {opciones.map((op) => {
        const activo = op.valor === valorActual;
        return (
          <TouchableOpacity
            key={op.valor}
            style={[s.opcion, activo && s.opcionActiva]}
            onPress={() => onChange(op.valor)}
            activeOpacity={0.7}
          >
            <View style={[s.radio, activo && s.radioActivo]}>
              {activo && <View style={s.radioInner} />}
            </View>
            <Text style={[s.texto, activo && s.textoActivo]}>
              {op.etiqueta}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const s = StyleSheet.create({
  grupo:       { gap: 8 },
  opcion:      { flexDirection: "row", alignItems: "center", gap: 10, padding: 12, borderRadius: 10, borderWidth: 1, borderColor: colors.borde, backgroundColor: colors.blanco },
  opcionActiva:{ borderColor: colors.primario, backgroundColor: colors.primarioClaro },
  radio:       { width: 18, height: 18, borderRadius: 9, borderWidth: 2, borderColor: "#aaa", alignItems: "center", justifyContent: "center" },
  radioActivo: { borderColor: colors.primario },
  radioInner:  { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.primario },
  texto:       { fontSize: 14, color: colors.textoMuted },
  textoActivo: { color: colors.texto, fontWeight: "500" },
});