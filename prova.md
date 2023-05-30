## 1) Explique no contexto de Compiladores cada um dos itens a seguir, indicando a sua importância no processo de compilação:
1. Interface de vanguarda
2. Interface de Retaguarda
3. Parser
4. Scanner
5. Tabela de Símbolos
6. Lexema
7. Token
8. Bufenização dos lexemas
9. LEX
10. Atributos de token

## 2) Verifique se a gramática abaixo satisfaz a condição de gramáticas LL e, podem ser utilizadas para Análise Sintática Topdown:

Em caso afirmativo analise a sentença "yzwhf" construindo a árvore sintática passo-a-passo

## 3) Elimine a recursividade à esquerda da seguinte gramática:
> S -> (L) | x
> L -> L,S | S

## 4) Considere a Gramática abaixo:
Através do método da Análise Sintática Descendente com retrocesso analise a sentença "abcd" construindo a árvore sintática passo-a-passo:

A descrição dos tokens do arquivo é mostrada abaixo:
1. Identificador de variável (IDVAR).
Padrão: começa com o caractere #, seguido de uma ou mais ocorrências de letra, ou digito, ou underline "_".
2. Identificador de opção (IDOP)
Padrão: inicia com uma letra, seguido de zero ou mais letras, ou dígitos.
3. Numero (NUM)
Padrão: é formado por um dígito, seguido de zero ou mais dígitos.
4. Atribuição (ATRIB): Caractere "<" seguido do caractere "-"
5. Comentário (não produz token)
Padrão: um comentário inicia com o caractere "/" seguido de "/". Todos os caracteres, após "//", até o final da linha são descartados.

Resolva:
a) Escreva as definições regulares para os tokens deste arquivo de configuração (menos comentário, já que comentário não é token).
b) Apresente o código tokenizado.

## 5) Em uma aplicação é preciso criar um arquivo de configuração para definir o valor de certas constantes usadas internamente. Este arquivo pode conter comentários. O arquivo de configuração é composto por uma sequência de atribuições da forma: ID ATRIB NUM ;

> Exemplo
>
> arquivo com informações do grafo
> #NUM_VERTICES <- 80
> #NUM_EDGES <- 100
> noCicles                 // opção de geração de grafo sem ciclos
> generateConnectedGraph   // opção para gerar grafo conexo ativada


