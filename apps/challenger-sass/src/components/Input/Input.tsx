import styles from './styles.module.scss';

interface InputProps {
  title: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: Record<string, string>;
  disabled?: boolean;
}

export default function Input({ title, name, placeholder, value, onChange, errors, disabled }: InputProps) {
  const hasError = errors && errors[name];

  return (
    <div className={styles.container}>
      <label className={styles.container__label}>{title}</label>
      <input
        className={`${styles.container__input} ${styles['container__input--default']} ${hasError ? styles['container__input--error'] : ''}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {hasError && <span className={styles.container__input__error}>*{errors[name]}</span>}
    </div>
  );
}
