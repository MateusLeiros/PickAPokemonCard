import styles from "./Button.module.css";

export default function Button2({
  className,
  label,
  isLoading,
  disabled,
  loadingText = "Loading...",
  onClick,
  icon,
  size,
}: buttonProps) {
  const labelText = isLoading ? loadingText : label;

  // Função similar ao switch
  const buttonSizeMap: { [key in size]: string } = {
    square: styles.sqrBtn,
    small: styles.smallBtn,
    medium: styles.mediumBtn,
    large: styles.largeBtn
  };

  const buttonClass = buttonSizeMap[size];

  const buttonClasses = [styles.button, buttonClass, className];

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
  size: size;
};

type size = "square" | "small" | "medium" | "large";
