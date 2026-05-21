import { useState } from "react";
import { Alert } from "react-native";

export type Transmision = "manual" | "automatica";
export type FormaPago   = "contado" | "credito";

export interface Resultado {
  costo:         number;
  impuesto:      number;
  granTotal:     number;
  letraMensual:  number | null;
  limiteCredito: number | null;
  aprobado:      boolean | null;
  formaPago:     FormaPago;
}

export function useVentaAuto() {

  const [costo,       setCosto]       = useState("");
  const [salario,     setSalario]     = useState("");
  const [transmision, setTransmision] = useState<Transmision>("manual");
  const [formaPago,   setFormaPago]   = useState<FormaPago>("contado");
  const [resultado,   setResultado]   = useState<Resultado | null>(null);

  function calcular() {
    const costoNum = parseFloat(costo);

    // Validación base: costo siempre obligatorio
    if (isNaN(costoNum) || costoNum <= 0) {
      Alert.alert("Error", "Ingresa un costo válido y mayor a cero.");
      return;
    }

    // Salario solo se valida si el pago es a crédito
    let salarioNum = 0;
    if (formaPago === "credito") {
      salarioNum = parseFloat(salario);
      if (isNaN(salarioNum) || salarioNum <= 0) {
        Alert.alert("Error", "Ingresa un salario válido para aplicar al crédito.");
        return;
      }
    }

    // Ajuste por transmisión
    const precioBase = transmision === "automatica"
      ? costoNum + 1500
      : costoNum;

    let granTotal:   number;
    let impuesto:    number;
    let letraMensual:  number | null = null;
    let limiteCredito: number | null = null;
    let aprobado:      boolean | null = null;

    if (formaPago === "contado") {
      // Solo ITBM (7%) sobre el precio base
      impuesto  = precioBase * 0.07;
      granTotal = precioBase + impuesto;

    } else {
      // Interés compuesto: Cf = Ci * (1 + r)^n
      // r = 8% anual, n = 9 años
      const capitalFinal = precioBase * Math.pow(1.08, 9);
      impuesto           = capitalFinal * 0.07;
      granTotal          = capitalFinal + impuesto;

      // Letra: capital final / 108 meses
      letraMensual  = granTotal / (9 * 12);
      limiteCredito = salarioNum * 0.30;
      aprobado      = limiteCredito >= letraMensual;
    }

    setResultado({
      costo: precioBase,
      impuesto,
      granTotal,
      letraMensual,
      limiteCredito,
      aprobado,
      formaPago,
    });
  }

  // Limpiar todo
  function reiniciar() {
    setCosto("");
    setSalario("");
    setTransmision("manual");
    setFormaPago("contado");
    setResultado(null);
  }

  return {
    // Valores
    costo, salario, transmision, formaPago, resultado,
    // Setters
    setCosto, setSalario, setTransmision, setFormaPago,
    // Accion
    calcular, reiniciar,
  };
}