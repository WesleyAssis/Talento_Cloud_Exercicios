#1. Soma
#2. Subtração
#3. Multiplicação
#4. Divisão

def calculadora(num1, num2, operacao):
    match operacao:
        case 1:
            return num1 + num2
        case 2:
            return num1 - num2
        case 3:
            return num1 * num2
        case 4:
            if num2 != 0:
                return num1 / num2
            else:
                return "Erro: Divisão por zero"
        case _:
            return "Operação inválida"

resultado = calculadora(10,5,4)
print(f"O resultado da operação é: {resultado}")