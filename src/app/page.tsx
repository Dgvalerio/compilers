import { FC } from 'react';

import { Q2 } from '@/app/questions/q2';
import { Q3 } from '@/app/questions/q3';

// Acho que até análise sintática preditiva tabular

const Exam: FC = () => (
  <>
    <Q2 />
    <Q3 />
  </>
);

const Home: FC = () => (
  <main>
    <h1>Compiladores - AB1</h1>
    <Exam />
  </main>
);

export default Home;
