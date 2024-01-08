"use client";

import { Button, Icon, Accordion, ItemAccordion } from "@stellaria/nova";

import { Section } from "@/components/Section";

export const Sections = () => {
  return (
    <>
      <Section
        title="Accordion"
        subtitle="Accordion with different variants and colors"
        gradient={() => (
          <Accordion variant="gradient" autoClose items={ACCORDION_ITEMS} />
        )}
        variants={(variant) => (
          <Accordion
            variant={variant}
            color={variant === "flat" ? "primary" : undefined}
            autoClose
            items={ACCORDION_ITEMS}
          />
        )}
        properties={{ maxWidth: "350px" }}
      />
      <Section
        title="Buttons"
        subtitle="Buttons with different variants and colors"
        disable={<Button disabled />}
        colors={(variant, color, shade) => (
          <Button
            color={color}
            shade={shade}
            variant={variant}
            gradient={[color, "sweet"]}
          />
        )}
        gradients={(gradient, gradientShades) => (
          <Button
            variant="gradient"
            gradient={gradient}
            gradientShades={gradientShades}
          />
        )}
      />

      <Section
        title="Icons"
        subtitle="Icons with different variants and colors"
        colors={(variant, color, shade, idx = 0) => (
          <Icon
            color={color}
            shade={shade}
            variant={variant}
            gradient={[color, "sweet"]}
            icon={ICONS[idx]}
            size={ICONSIZE}
          />
        )}
        gradients={(gradient, gradientShades, idx = 0) => (
          <Icon
            variant="gradient"
            gradient={gradient}
            gradientShades={gradientShades}
            icon={ICONS[idx]}
            size={ICONSIZE}
          />
        )}
      />
    </>
  );
};

const ICONSIZE = 24;
const ICONS = [
  "plus",
  "arrow-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "a",
  "b",
  "star",
  "heart",
  "check",
  "clone",
  "filter",
] as const;

const ACCORDION_ITEMS = [
  {
    id: "1",
    icon: ["plus", "minus"],
    title:
      "Is it possible to use the same component for the accordion and the accordion item?",
    content:
      "Yes, it is possible to use the same component for the accordion and the accordion item.",
  },
  {
    id: "2",
    disabled: true,
    title:
      "What's the difference between a controlled and an uncontrolled component?",
    content:
      "A controlled component has its state controlled by React. An uncontrolled component has its state controlled by the DOM.",
  },
] as ItemAccordion[];
