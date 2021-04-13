import styled, {css} from 'styled-components'
import {breakPointsMedia} from '../../../../theme/utils/breakPointsMedia'

export const Wrapper = styled.div`
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  background-color: white;
  align-items: center;
  ${breakPointsMedia({
    xs: css`
      justify-content: center;
    `,
    md: css`
      justify-content: space-around;
    `,
  })}
  flex-wrap: wrap;
  padding: 28px;
  border-bottom: 1px solid #d5d5d5;

  ${breakPointsMedia({
    xs: css`
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
      border-radius: 24px 24px 0px 0px;
    `,
    md: css`
      position: unset;
    `,
  })}
`

export const ButtonModal = styled.button`
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakPointsMedia({
    xs: css`
      width: 40px;
      height: 40px;
      font-size: 28px;
    `,

    md: css`
      width: 32px;
      height: 32px;
    `,
  })}

  border: 0;
  color: #fff;
  transition: opacity 0.2s;
  box-shadow: 0px 0px 12px rgba(251, 123, 107, 0.3);

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  background-color: ${({theme}) =>
    theme.colors.modes[theme.mode].secondary.main.color};
`

export const ContentWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) =>
    theme.colors.modes[theme.mode].background.light.color};
`

Header.LeftSide = styled.div`
  ${breakPointsMedia({
    xs: css`
      svg {
        display: none;
      }
    `,
    md: css`
      svg {
        display: block;
      }
    `,
  })}
`

Header.RightSide = styled.div`
  display: flex;
  align-items: center;

  svg:nth-of-type(2) {
    order: -1;
  }

  svg:nth-of-type(1) {
    margin: 0 26px;
  }

  svg:nth-of-type(3) {
    margin: 0 26px;
  }

  ${breakPointsMedia({
    md: css`
      svg:nth-of-type(2) {
        order: 0;
        margin-left: 26px;
      }
    `,
  })}

  svg {
    ${breakPointsMedia({
      xs: css`
        width: 24px;
        height: 24px;
      `,

      md: css`
        width: 32px;
        height: 32px;
      `,
    })}

    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({theme}) =>
        theme.colors.modes[theme.mode].secondary.main.color};
    }
  }
`

export const ProfileAvatar = styled.div`
  background-color: #333;
  border-radius: 50%;

  ${breakPointsMedia({
    xs: css`
      width: 77px;
      height: 77px;
      margin-right: 10px;
    `,
    md: css`
      width: 150px;
      height: 150px;
    `,
  })}
`

export const Avatar = styled.div`
  ${breakPointsMedia({
    xs: css`
      width: 24px;
      height: 24px;
    `,

    md: css`
      width: 32px;
      height: 32px;
    `,
  })}
  background-color: #333;
  border-radius: 50%;
`
