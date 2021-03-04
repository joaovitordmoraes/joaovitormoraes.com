import styled from 'styled-components'

export const TextContent = styled.div`
  max-width: 660px;
  width: 100%;
  color: var(--color-white);

  &.title-mobile {
    display: none;
  }

  h1 {
    font-family: var(--font-krona);
    font-size: var(--size-large);
    margin-bottom: 25px;
  }

  h2 {
    font-family: var(--font-krona);
    font-size: var(--size-medium);
    margin-bottom: 10px;
  }

  p {
    font-family: var(--font-open);
    font-size: var(--size-medium);
    line-height: 1.6;
    margin-bottom: 32px;
  }

  .contact {
    font-family: var(--font-open);
    font-size: var(--size-medium);
    font-weight: 900;

    > a {
      color: var(--color-four);
      text-decoration: none;
      margin-left: 15px;

      &:not(:last-child) {
        padding-right: 15px;
        margin-left: 0;
        border-right: 2px solid var(--color-four);
      }
    }
  }

  @media (max-width: 992px) {
    .contact {
      display: flex;
      flex-direction: column;
      text-align: center;

      > a {
        margin: 0 0 15px 0;

        &:not(:last-child) {
          padding: 0;
          border: none;
        }
      }
    }
  }
`

export const AboutWrapper = styled.section`
  max-width: 1520px;
  width: 100%;
  height: 720px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  picture {
    margin-left: 60px;
  }

  @media (max-width: 1540px) {
    max-width: 1360px;
    height: 500px;
  }

  @media (max-width: 1367px) {
    max-width: 1280px;
  }

  @media (max-width: 992px) {
    flex-direction: column;

    picture {
      order: 2;
      margin-left: 0;
      margin-bottom: 50px;
    }

    ${TextContent} {
      order: 3;
      max-width: 500px;

      &.title-mobile {
        display: block;
        order: 1;

        h1 {
          display: block;
          text-align: center;
        }
      }
      h1 {
        display: none;
      }

      h2 {
        text-align: center;
      }

      .techs {
        text-align: center;
      }
    }
  }

  @media (max-width: 576px) {
    margin-top: 50px;

    ${TextContent} {
      h1 {
        font-size: var(--size-above-medium);
      }

      p {
        font-size: var(--size-small);
      }
    }
  }
`
