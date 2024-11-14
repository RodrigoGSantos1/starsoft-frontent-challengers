import styles from './styles.module.scss';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
}

export default function Button({ title, disabled, onClick, icon }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles['button--default']}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
      {icon && <span className={styles.button__icon}>{icon}</span>}
    </button>
  );
}