import { StyleSheet } from "react-native";

export const colors = {
  primario:    "#2563eb",
  primarioClaro: "#eff6ff",
  fondo:       "#f8f9fb",
  blanco:      "#ffffff",
  borde:       "#e2e8f0",
  texto:       "#111827",
  textoMuted:  "#6b7280",
  aprobado:    "#dcfce7",
  aprobadoTxt: "#166534",
  rechazado:   "#fee2e2",
  rechazadoTxt:"#991b1b",
};

export const shared = StyleSheet.create({
container: { flexGrow: 1, padding: 24, paddingBottom: 60, backgroundColor: colors.fondo },
  label:      { fontSize: 14, 
                fontWeight: "500", 
                color: colors.textoMuted,
                 marginBottom: 6,
                  marginTop: 16
             },
  input:      { borderWidth: 1,
                borderColor: colors.borde,
                 borderRadius: 10,
                  padding: 12,
                   fontSize: 16,
                    backgroundColor: colors.blanco
                   },
  card:       { backgroundColor: colors.blanco,
                 borderRadius: 14, 
                 padding: 18,
                  borderWidth: 1,
                   borderColor: colors.borde 
                  },
  boton:      { marginTop: 28, 
                backgroundColor: colors.primario, 
                padding: 16,
                 borderRadius: 12,
                  alignItems: "center" as const
             },
  botonTexto: { color: "#fff",
                fontSize: 16,
                 fontWeight: "600" as const
             },
});