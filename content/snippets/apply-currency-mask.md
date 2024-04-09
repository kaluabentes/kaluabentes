# Aplicar máscara da moeda real á uma entrada

```typescript
function applyCurrencyMask(input: string): string {
  // Remove caracteres não numéricos
  const numericValue = input.replace(/\D/g, "")

  // Adiciona zeros à esquerda para garantir 2 casas decimais
  let filledValue = numericValue.padStart(3, "0")

  // Separa a parte inteira da parte decimal
  const intValue = filledValue.slice(0, -2).replace(/^0+/, "")
  const decimalValue = filledValue.slice(-2)

  // Adiciona o separador de milhares
  const formattedIntValue = intValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  // Retorna a string com a máscara de moeda real
  return `R$ ${formattedIntValue || "0"},${decimalValue}`
}
```
