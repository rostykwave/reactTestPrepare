import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
} from 'styled-system';

interface IProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    PositionProps {
  children: React.ReactNode;
}

export const Box = styled('div')<IProps>(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position
);
