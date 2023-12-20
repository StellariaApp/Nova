import { Button } from "@stellaria/nova";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="flat"
        color="primary"
        colorVariant="darkness"
        stylex={(theme) => ({
          backgroundColor: theme.colors["primary.darkness"],
          color: theme.colors["primary.lightness"],
          border: `1px solid ${theme.colors["primary.lightness"]}`,
        })}
      />
      <Button variant="flat" color="primary" colorVariant="dark" />
      <Button variant="flat" color="primary" />
      <Button variant="flat" color="primary" colorVariant="light" />
      <Button variant="flat" color="primary" colorVariant="lightness" />
      <Button disabled />
    </main>
  );
}
