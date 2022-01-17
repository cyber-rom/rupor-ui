import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from './Popover';
import { usePopover } from '../../hooks/usePopover';
import { HorizontalVariants, VerticalVariants } from './Popover.types';
import { Button } from '..';
import { Paper } from '../Paper';

export default {
  title: 'Example/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => {
  const { anchorElementProps, popoverProps, handleOpenPopover } = usePopover('button');

  return (
    <div style={{
      height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Button
        theme="primary"
        title="button"
        onClick={(e) => handleOpenPopover(e)}
        {...anchorElementProps}
      />
      <Popover
        {...args}
        {...popoverProps}
      >
        <Paper style={{ width: 200, height: 150, backgroundColor: 'rgba(255,255,255,0.3)' }} />
      </Popover>
    </div>
  );
};

export const Default = Template.bind({});

export const Offset = Template.bind({});
Offset.args = {
  offsetY: 6,
  offsetX: 4,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  anchorOrigin: {
    vertical: VerticalVariants.bottom,
    horizontal: HorizontalVariants.left,
  },
  transformOrigin: {
    vertical: VerticalVariants.top,
    horizontal: HorizontalVariants.right,
  },
  offsetY: 8,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  anchorOrigin: {
    vertical: VerticalVariants.bottom,
    horizontal: HorizontalVariants.right,
  },
  transformOrigin: {
    vertical: VerticalVariants.top,
    horizontal: HorizontalVariants.right,
  },
  offsetY: 8,
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  anchorOrigin: {
    vertical: VerticalVariants.top,
    horizontal: HorizontalVariants.left,
  },
  transformOrigin: {
    vertical: VerticalVariants.bottom,
    horizontal: HorizontalVariants.right,
  },
  offsetY: -8,
};
