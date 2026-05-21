# 🚗 Venta de Auto 

**Universidad Tecnológica de Panamá**  
Facultad de Ingeniería de Sistemas Computacionales  
Departamento de Programación de Computadoras  
Curso: Desarrollo de Software VI — Profesora: Marlina Sánchez

---

## Descripción

Aplicación móvil desarrollada en **React Native con Expo** que simula el proceso de venta de un auto. Permite calcular el costo final según el tipo de transmisión y la forma de pago (contado o crédito), aplicando ITBM e interés compuesto según corresponda.

---

## Funcionalidades

- Selección de transmisión: Manual o Automática (+$1,500.00)
- Dos formas de pago:
  - **Contado:** aplica solo ITBM del 7%
  - **Crédito:** aplica interés compuesto del 8% anual a 9 años + ITBM del 7%
- Campo de salario visible únicamente cuando se selecciona crédito
- Cálculo de letra mensual (108 cuotas)
- Verificación de aprobación: si el 30% del salario cubre la letra mensual
- Botón de reinicio para nueva consulta

---

## Fórmulas utilizadas

| Concepto | Fórmula |
|---|---|
| Transmisión automática | `precio = costo + 1500` |
| ITBM | `impuesto = precio × 0.07` |
| Interés compuesto (crédito) | `Cf = Ci × (1 + 0.08)^9` |
| Letra mensual | `letra = (Cf + ITBM) / 108` |
| Límite de aprobación | `30% del salario >= letra` |

---

## Tecnologías

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) con Expo Router
- [Expo Go](https://expo.dev/go) para pruebas en dispositivo físico
- TypeScript
- pnpm como gestor de paquetes

---

## Estructura del proyecto

```
AutoClick/
├── app/
│   ├── (tabs)/
│   │   └── index.tsx        ← pantalla principal
│   ├── _layout.tsx          ← layout global con tabs
│   └── modal.tsx
├── components/
│   ├── RadioGroup.tsx       ← botones de selección reutilizables
│   └── ResultadoCard.tsx    ← tarjeta de resultados
├── constants/
│   └── styles.ts            ← colores y estilos compartidos
├── hooks/
│   └── useVentaAuto.ts      ← lógica y estados del formulario
├── assets/
├── .gitignore
├── app.json
├── package.json
└── README.md
```

---

## Instalación y ejecución

### Requisitos previos

- Node.js v18 o superior
- pnpm instalado globalmente
- App **Expo Go** en tu celular (Android o iOS)
- Celular y computadora en la **misma red Wi-Fi**

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/AutoClick.git

# 2. Entrar a la carpeta
cd AutoClick

# 3. Instalar dependencias
pnpm install

# 4. Iniciar el servidor de desarrollo
pnpm start
```

Escanea el código QR que aparece en la terminal con la app **Expo Go** desde tu celular.

---

## Subir cambios a GitHub

```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```

---

## Autora

Anacelis Boniche — Estudiante 
Universidad Tecnológica de Panamá
