'use client';
import { Button, AtomWrapper, css } from '@stellaria/supernova';
import ShowButton from '../components/show-button';
import ToggleTheme from '../components/ToggleTheme';

export default function Page(): JSX.Element {
  return (
    <AtomWrapper
      css={() => css`
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      `}
    >
      <ToggleTheme />
      <ShowButton />
      <Button astype="flat">Flat</Button>
      <Button astype="outline">Outline</Button>
      <Button astype="none">None</Button>
      <Button disabled>Disable</Button>
      <Button
        css={() => css`
          width: 100%;
          background-color: #ff4949;
          border-color: #e03737;
          color: #ffffff;
          padding: 1rem;
          :hover {
            background-color: #f04545;
            border-color: #f04545;
          }
        `}
      >
        Custom CSS
      </Button>
      <Button
        backgroundColor="#4572f0"
        border="1px solid #4572f0"
        color="#ffffff"
        height={50}
        interactions={{
          ':hover': {
            backgroundColor: '#345fd3',
            borderColor: '#345fd3'
          },
          ':active': {
            backgroundColor: '#4c76e9',
            borderColor: '#4c76e9'
          }
        }}
        width={200}
      >
        With Props
      </Button>
    </AtomWrapper>
  );
}
