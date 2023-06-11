import { FC } from 'react';

export const Q5: FC = () => (
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
