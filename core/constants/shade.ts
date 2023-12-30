export const ShadeStateMachine = {
  100: {
    NEXT: "200",
    BACK: "200",
  },
  200: {
    NEXT: "300",
    BACK: "100",
  },
  300: {
    NEXT: "400",
    BACK: "200",
  },
  400: {
    NEXT: "500",
    BACK: "300",
  },
  500: {
    NEXT: "600",
    BACK: "400",
  },
  600: {
    NEXT: "700",
    BACK: "500",
  },
  700: {
    NEXT: "800",
    BACK: "600",
  },
  800: {
    NEXT: "900",
    BACK: "700",
  },
  900: {
    NEXT: "800",
    BACK: "800",
  },
} as const;
