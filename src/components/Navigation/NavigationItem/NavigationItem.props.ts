import { LinkBaseProps } from '../../LinkBase/LinkBase.type';

export type NavigationItemProps = LinkBaseProps & {
  collapsed?: boolean;
  icon: JSX.Element;
  title: string;
};
