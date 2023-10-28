'use client';
import { Accordion, Button, Wrapper, css } from '@stellaria/supernova';
import ShowButton from '../components/show-button';
import ToggleTheme from '../components/ToggleTheme';

export default function Page(): JSX.Element {
  return (
    <Wrapper
      css={() => css`
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      `}
    >
      <ToggleTheme />
      <ShowButton />
      <Button variant="flat">Flat</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="none">None</Button>
      <Button disabled>Disable</Button>

      <Accordion
        autohide
        items={[
          {
            id: '1',
            open: true,
            title:
              'Is it possible to use the same component for the accordion and the accordion item?',
            content:
              'Yes, it is possible to use the same component for the accordion and the accordion item.'
          },
          {
            id: '2',
            title:
              "What's the difference between a controlled and an uncontrolled component?",
            content:
              'A controlled component has its state controlled by React. An uncontrolled component has its state controlled by the DOM.'
          },
          {
            id: '3',
            title:
              'What is the difference between a fragment and a document fragment?',
            content:
              'A fragment is a component that does not render a DOM element. A document fragment is a DOM node that is not part of the main DOM tree.'
          }
        ]}
      />
      <Accordion.Container>
        <Accordion.Item>
          <Accordion.Trigger>Title 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
      </Accordion.Container>
    </Wrapper>
  );
}
