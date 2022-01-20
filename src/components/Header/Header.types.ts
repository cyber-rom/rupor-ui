export interface HeaderProps {
  icons?: {
    icon: JSX.Element
    onClick: () => void;
  }[]
  className: string;
  isLogged: boolean;
  avatarSrc?: string;
  buttonTxt: string;
  logInClick: () => void;
  logoClick: () => void;
}
