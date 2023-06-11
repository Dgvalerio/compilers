import { FC } from 'react';

export const Q4: FC = () => (
  <>
    <h2>4) Considere a Gramática abaixo:</h2>
    <p>
      Através do método da Análise Sintática Descendente com retrocesso analise a sentença &ldquo;abcd&rdquo; construindo a
      árvore sintática passo-a-passo:
    </p>
    <p>A descrição dos tokens do arquivo é mostrada abaixo:</p>
    <ol>
      <li>
        Identificador de variável (IDVAR). <br />
        Padrão: começa com o caractere #, seguido de uma ou mais ocorrências de letra, ou digito, ou underline &ldquo;_&rdquo;.
      </li>
      <li>
        Identificador de opção (IDOP) <br /> Padrão: inicia com uma letra, seguido de zero ou mais letras, ou dígitos.
      </li>
      <li>
        Numero (NUM) <br /> Padrão: é formado por um dígito, seguido de zero ou mais dígitos.
      </li>
      <li>
        Atribuição (ATRIB): <br /> Caractere &ldquo;&lt;&rdquo; seguido do caractere &ldquo;-&rdquo;
      </li>
      <li>
        Comentário (não produz token) Padrão: um comentário inicia com o caractere &ldquo;/&rdquo; seguido de &ldquo;/&rdquo;.
        Todos os caracteres, após &ldquo;//&rdquo;, até o final da linha são descartados.
      </li>
    </ol>
    <p>Resolva:</p>
    <ol type="a">
      <li>
        Escreva as definições regulares para os tokens deste arquivo de configuração (menos comentário, já que comentário não é
        token).
      </li>
      <li>Apresente o código tokenizado.</li>
    </ol>
  </>
);
