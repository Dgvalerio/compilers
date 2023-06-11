import { Grammar } from '@/app/types';

export const getGrammar = (input: string[]): Grammar => {
  const rules: Record<string, string[]> = {};

  input.forEach((item) => {
    const [head, production] = item.replaceAll(' ', '').split('→');

    if (rules[head]) rules[head].concat(production.split('|'));
    else rules[head] = production.split('|');
  });

  return rules;
};

export const processLeftRecursions = (grammar: Grammar): Grammar => {
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

export const hasLeftRecursions = (grammar: Grammar): boolean => {
  const has = Object.entries(grammar).find(([variable, productions]) =>
    productions.find((production) => production.startsWith(variable))
  );

  return !!has;
};
