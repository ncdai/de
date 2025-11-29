import { motion, AnimatePresence } from 'motion/react';
import type { DesignEngineer } from '@/data/list';
import styles from './engineer.module.css';
import { useState } from 'react';
import { cn } from '@/helpers/styles';

interface EngineerProps {
  engineer: DesignEngineer;
}

export function Engineer({ engineer }: EngineerProps) {
  const [showDefinition, setShowDefinition] = useState(false);

  return (
    <li className={styles.engineer}>
      <div className={styles.info}>
        {engineer.definition && (
          <button
            className={cn(
              styles.showDefinition,
              showDefinition && styles.shown,
            )}
            onClick={() => setShowDefinition(prev => !prev)}
          >
            +
          </button>
        )}

        <p className={styles.name}>{engineer.name}</p>
        <div className={styles.divider} />
        <div className={styles.links}>
          {engineer.x && (
            <a href={engineer.x} rel="noreferrer" target="_blank">
              X
            </a>
          )}

          {engineer.github && (
            <a href={engineer.github} rel="noreferrer" target="_blank">
              GH
            </a>
          )}

          {engineer.website && (
            <a href={engineer.website} rel="noreferrer" target="_blank">
              WEB
            </a>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {showDefinition && engineer.definition && (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            className={styles.definition}
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            key="definition"
            layout
            transition={{
              height: { damping: 32, stiffness: 320, type: 'spring' },
              opacity: { duration: 0.25 },
            }}
          >
            <div className={styles.content}>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                initial={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <h2>What does Design Engineering mean?</h2>
                <p>“{engineer.definition}”</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
