const spacingUnit = 10

export const spacingPx = (amount: number): string => {
  return `${spacing(amount)}px`
}

export const spacing = (amount: number): number => {
  return amount * spacingUnit
}
