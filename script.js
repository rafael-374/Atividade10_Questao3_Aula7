function informações(atual, nasc, nome)
{
    const idade = atual - nasc
    alert("Olá, seu nome é " + nome + " e você tem " + idade + " anos\n")
}
const ano_atual = 2023
let ano_nasc = prompt('Qual seu ano de nascimento?')
const nome = prompt('Qual seu nome?')

informações(ano_atual, ano_nasc, nome)