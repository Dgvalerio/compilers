import { FC } from 'react';

// Acho que até análise sintática preditiva tabular

const Q1: FC = () => (
  <>
    <h2>
      1) Explique no contexto de Compiladores cada um dos itens a seguir, indicando a sua importância no processo de compilação:
    </h2>
    <ol>
      <li>Interface de vanguarda</li>
      <li>Interface de Retaguarda</li>
      <li>Parser</li>
      <li>Scanner</li>
      <li>Tabela de Símbolos</li>
      <li>Lexema</li>
      <li>Token</li>
      <li>Bufenização dos lexemas</li>
      <li>LEX</li>
      <li>Atributos de token</li>
    </ol>
  </>
);

const Q2: FC = () => (
  <>
    <h2>
      2) Verifique se a gramática abaixo satisfaz a condição de gramáticas LL e, podem ser utilizadas para Análise Sintática
      Topdown:
    </h2>
    <code>
      G = &#123;&#123;X, Y, Z, W, H, F, &#123;y, z, w, h, f&#125;, P, X&#125;&#125;
      <br />
      P = &#123; <br />
      &nbsp; X &rarr; YZWHF <br />
      &nbsp; Y &rarr; y | &#x3B5; <br />
      &nbsp; Z &rarr; z | &#x3B5; <br />
      &nbsp; W &rarr; w | &#x3B5; <br />
      &nbsp; H &rarr; h <br />
      &nbsp; F &rarr; f | &#x3B5; <br />
      &#125;
    </code>
    <p>Em caso afirmativo analise a sentença &ldquo;yzwhf&rdquo; construindo a árvore sintática passo-a-passo</p>
  </>
);

type Grammar = Record<string, string[]>;

const getGrammar = (input: string[]): Grammar => {
  const rules: Record<string, string[]> = {};

  input.forEach((item) => {
    const [head, production] = item.replaceAll(' ', '').split('→');

    if (rules[head]) rules[head].concat(production.split('|'));
    else rules[head] = production.split('|');
  });

  return rules;
};

const processLeftRecursions = (grammar: Grammar): Grammar => {
  const without: Grammar = {};

  Object.entries(grammar).forEach(([variable, productions]) => {
    productions.forEach((production) => {
      if (production.startsWith(variable)) {
        const toAdd1 = productions.filter((p) => p !== production).map((p) => `${p}${variable}'`);

        if (without[variable]) without[variable].concat(toAdd1);
        else without[variable] = toAdd1;

        const toAdd2 = [`${production.replaceAll(variable, '')}${variable}'`, 'ε'];

        if (without[`${variable}'`]) without[`${variable}'`].concat(toAdd2);
        else without[`${variable}'`] = toAdd2;
      } else {
        if (without[variable]) without[variable].concat(productions);
        else without[variable] = productions;
      }
    });
  });

  return without;
};

const Q3: FC = () => {
  const input = ['S → (L) | x', 'L → L,S | S'];

  const output = getGrammar(input);

  const recursions = processLeftRecursions(output);

  return (
    <>
      <>
        <h2>3) Elimine a recursividade à esquerda da seguinte gramática:</h2>
        <code>
          {input.map((a) => (
            <>
              {a}
              <br />
            </>
          ))}
        </code>
      </>
      <h3>Resposta</h3>
      <code>
        {Object.entries(recursions).map(([vr, prd]) => (
          <>
            {`${vr} → ${prd.join(' | ')}`}
            <br />
          </>
        ))}
      </code>
    </>
  );
};

const Q4: FC = () => (
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

const Q5: FC = () => (
  <>
    <h2>
      5) Em uma aplicação é preciso criar um arquivo de configuração para definir o valor de certas constantes usadas
      internamente. Este arquivo pode conter comentários. O arquivo de configuração é composto por uma sequência de atribuições
      da forma: ID ATRIB NUM ;
    </h2>
    <p>
      <b>Exemplo</b>
    </p>
    <code>
      arquivo com informações do grafo <br />
      #NUM_VERTICES &larr; 80 <br />
      #NUM_EDGES &larr; 100 <br /> noCicles // opção de geração de grafo sem ciclos <br />
      generateConnectedGraph // opção para gerar grafo conexo ativada
    </code>
  </>
);

const Exam: FC = () => (
  <>
    <Q1 />
    <Q2 />
    <Q3 />
    <Q4 />
    <Q5 />
  </>
);

const Home: FC = () => (
  <main>
    <h1>Compiladores - AB1</h1>
    <Exam />
  </main>
);

export default Home;
