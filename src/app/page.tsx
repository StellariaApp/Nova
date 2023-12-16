import { Button } from "@stellaria/nova";

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          width: "max-content",
          flexDirection: "row",
          gap: "1rem",
          padding: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="flat" />
        <Button variant="outline" />
        <Button variant="none" />
        <Button disabled />
      </div>
    </main>
  );
}
