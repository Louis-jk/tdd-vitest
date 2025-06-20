import type { CSSProperties, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
}>;

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
}: ButtonProps) => {
  const variantStyle: Record<ButtonProps["variant"], CSSProperties> = {
    primary: {
      backgroundColor: "blue",
      color: "white",
    },
    secondary: {
      backgroundColor: "gray",
      color: "white",
    },
  };

  const sizeStyle: Record<ButtonProps["size"], CSSProperties> = {
    sm: {
      padding: "0.5rem",
    },
    md: {
      padding: "0.75rem",
    },
    lg: {
      padding: "1rem",
    },
  };

  return (
    <button
      style={{
        outline: "none",
        border: "none",
        borderRadius: 10,
        cursor: "pointer",
        ...variantStyle[variant],
        ...sizeStyle[size],
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
