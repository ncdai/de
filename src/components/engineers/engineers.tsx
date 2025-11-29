import { Engineer } from '../engineer';
import type { DesignEngineer } from '@/data/list';

import styles from './engineers.module.css';

interface EngineersProps {
  engineers: DesignEngineer[];
}

export function Engineers({ engineers }: EngineersProps) {
  return (
    <ul className={styles.engineers}>
      {engineers.map(engineer => (
        <Engineer engineer={engineer} key={engineer.name} />
      ))}
    </ul>
  );
}
