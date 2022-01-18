export interface ShowMoreBtnProps {
  onClick: () => void;
  children?: string
  className?: string;
  collapsed?: boolean;
  icon: JSX.Element;
}
