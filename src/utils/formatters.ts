export const formatToBRL = (amount: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);

export const getValuePercentage = (amount: number, percentage: number) =>
  (percentage * amount) / 100;