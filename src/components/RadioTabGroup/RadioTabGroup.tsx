import React, { FC, useState } from 'react';
import { RadioTab } from './RadioTab/RadioTab';
import { RadioTabButtonGroup } from './RadioTabGroup.styles';
import { RadioTabGroupProps } from './RadioTabGroup.types';

const RadioTabGroup: FC<RadioTabGroupProps> = ({ tabs, onSelectHandler }) => {
  const [current, setCurrent] = useState<number>(0);
  const onClickHandler = (id: number) => {
    setCurrent(id);
    onSelectHandler();
  };

  return (
    <RadioTabButtonGroup>
      {tabs.map((item) => {
        return (
          <RadioTab
            onChange={onClickHandler}
            key={item.id}
            selected={current === item.id}
            id={item.id}
          >
            {item.children}
          </RadioTab>
        );
      })}
    </RadioTabButtonGroup>
  );
};

export { RadioTabGroup };
