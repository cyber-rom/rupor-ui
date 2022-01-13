export interface ITabHeaderItemProps {
    text: string,
    selected?: boolean,
    onClick: () => void
}

export interface ITabs {
    tabs: ITab[],
    activeIndex: number,
    onTabClick: (index: number) => void
}

export interface ITab {
    text: string
    renderContent(): JSX.Element;
}
