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

  let iconElement: React.ReactElement | undefined = undefined;
  if (icon !== undefined) {
    iconElement = <div className={styles.icon}>{icon}</div>;
  }
  
  return (
    <button
      className={buttonClasses.join(" ")}
      disabled={disabled}
      onClick={onClick}
    >
      <div className={styles.label}>
        {iconElement}
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
