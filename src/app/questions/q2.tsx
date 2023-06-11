'use client';
import { FC } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

import styled from '@emotion/styled';

import { getGrammar, hasLeftRecursions } from '@/app/questions/utils';
import { Grammar } from '@/app/types';

type Branch = string | [string, string[] | Branch[]];

interface analysisLine {
  stack: string;
  input: string;
  production: string;
  tree: Branch;
}

const Table = styled.table`
  background-color: #ddd;

  border-collapse: collapse;
  border: 1px solid #222;

  thead {
    th {
      padding: 0.2rem 2rem;
      background-color: #222;
      color: #fff;
    }
  }

  tbody {
    tr {
      td {
        padding: 0.2rem 0.4rem;
        border-left: 1px solid #222;
        border-right: 1px solid #222;
      }

      &:nth-child(even) {
        background-color: #fff;
      }
    }
  }
`;

const topDownAnalysis = (
  grammar: Grammar,
  sentence: string
): analysisLine[] => {
  const list = Object.entries(grammar);

  const lines: analysisLine[] = [];
  let current = list[0][0];
  let stack = ['$'];
  let tree: Branch = [] as unknown as Branch;

  stack.push(current);

  while (sentence.length > 0) {
    console.log(`while ${current}`);

    if (grammar[current]) {
      const production = grammar[current] ? grammar[current][0] : '?';

      if (tree.length > 0) {
        tree = [
          tree[0],
          tree[1].map((item) =>
            item === current ? [current, production.split('')] : item
          ),
        ];
      } else {
        tree = [current, production.split('')];
      }

      lines.push({
        stack: stack.join(''),
        input: sentence,
        production: `${current} → ${production}`,
        tree,
      });

      stack.pop();
      stack = stack.concat(production.split('').reverse());
    } else {
      lines.push({
        stack: stack.join(''),
        input: sentence,
        production: ``,
        tree: [],
      });

      if (stack[stack.length - 1] === sentence[0]) {
        stack.pop();
        sentence = sentence.slice(1);
      }
    }

    current = stack[stack.length - 1];
  }

  lines.push({
    stack: stack.join(''),
    input: sentence,
    production: ``,
    tree,
  });

  console.log('\n');

  return lines;
};

export const Q2: FC = () => {
  const input = [
    'X → YZWHF',
    'Y → y | ε',
    'Z → z | ε',
    'W → w | ε',
    'H → h',
    'F → f | ε',
  ];
  const sentence = 'yzwhf';

  const output = getGrammar(input);

  const hasRecursions = hasLeftRecursions(output);

  const tableData: analysisLine[] = topDownAnalysis(output, sentence);

  return (
    <>
      <h2>
        2) Verifique se a gramática abaixo satisfaz a condição de gramáticas LL
        e, podem ser utilizadas para Análise Sintática Topdown:
      </h2>
      <code>
        G = &#123;&#123;X, Y, Z, W, H, F&#125;, &#123;y, z, w, h, f&#125;, P,
        X&#125;
        <br />
        P = &#123; <br />
        {input.map((a) => (
          <>
            &nbsp; {a}
            <br />
          </>
        ))}
        &#125;
      </code>
      <p>
        Em caso afirmativo analise a sentença &ldquo;{sentence}&rdquo;
        construindo a árvore sintática passo-a-passo
      </p>
      <p>
        <i>
          {hasRecursions
            ? 'Tem recursividade a esquerda'
            : 'Não tem recursividade a esquerda'}
        </i>
      </p>
      <Table>
        <thead>
          <tr>
            <th>Pilha</th>
            <th>Entrada</th>
            <th>Produção</th>
            <th>Árvore</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.stack}</td>
              <td>{data.input}</td>
              <td>{data.production}</td>
              <td>
                {data.tree.length > 0 && (
                  <Tree label={data.tree[0]}>
                    {data.tree[1].map((item: Branch) => {
                      if (Array.isArray(item)) {
                        return (
                          <TreeNode key={item[0]} label={item[0]}>
                            {item[1].map((i) => (
                              <TreeNode key={i as string} label={i} />
                            ))}
                          </TreeNode>
                        );
                      } else {
                        return <TreeNode key={item[0]} label={item} />;
                      }
                    })}
                  </Tree>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
