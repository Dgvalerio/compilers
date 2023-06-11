import { FC } from 'react';

import { getGrammar, processLeftRecursions } from '@/app/questions/utils';

export const Q3: FC = () => {
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
