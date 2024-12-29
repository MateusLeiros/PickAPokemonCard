import styles from "./Button.module.css";

export default function Button2({
  className,
  label,
  isLoading,
  disabled,
  loadingText = "Loading...",
  onClick,
  icon,
}: buttonProps) {
  const buttonClasses = [className, styles.button];
  const labelText = isLoading ? loadingText : label;

  return (
    <button
      className={buttonClasses.join(" ")}
      disabled={disabled}
      onClick={onClick}
    >
      <div className={styles.label}>
        <div className={styles.icon}>{icon}</div>
        <span>{labelText}</span>
      </div>
    </button>
  );
}
type buttonProps = {
  disabled?: boolean;
  label: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactElement;
  isLoading?: boolean;
  loadingText?: string;
};
