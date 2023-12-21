import stylex from "@stylexjs/stylex";
import { Button, theme } from "@stellaria/nova";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    display: "flex",
    width: "max-content",
    flexDirection: "row",
    gap: "1rem",
    padding: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
  button: () => ({
    backgroundColor: theme.colors["secondary.dark"],
    borderColor: `1px solid ${theme.colors["secondary.lightness"]}`,
    color: theme.colors["secondary.lightness"],
    ":hover": {
      backgroundColor: theme.colors["secondary.darkness"],
      color: theme.colors["secondary.lightness"],
      borderColor: `1px solid ${theme.colors["secondary.darkness"]}`,
    },
  }),
});

const Home = () => (
  <main {...stylex.props(styles.container)}>
    <div {...stylex.props(styles.wrapper)}>
      <Button
        variant="flat"
        color="primary"
        colorvariant="darkness"
        stylex={(theme) => ({
          backgroundColor: theme.colors["primary.darkness"],
          color: theme.colors["primary.lightness"],
          border: `1px solid ${theme.colors["primary.lightness"]}`,
        })}
      />
      <Button
        variant="flat"
        color="primary"
        colorvariant="darkness"
        className={styles.button()}
      />
      <Button disabled />
    </div>
    <div {...stylex.props(styles.wrapper)}>
      <Button variant="flat" color="primary" colorvariant="darkness" />
      <Button variant="flat" color="primary" colorvariant="dark" />
      <Button variant="flat" color="primary" />
      <Button variant="flat" color="primary" colorvariant="light" />
      <Button variant="flat" color="primary" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="flat" color="secondary" colorvariant="darkness" />
      <Button variant="flat" color="secondary" colorvariant="dark" />
      <Button variant="flat" color="secondary" />
      <Button variant="flat" color="secondary" colorvariant="light" />
      <Button variant="flat" color="secondary" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="flat" color="success" colorvariant="darkness" />
      <Button variant="flat" color="success" colorvariant="dark" />
      <Button variant="flat" color="success" />
      <Button variant="flat" color="success" colorvariant="light" />
      <Button variant="flat" color="success" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="flat" color="warning" colorvariant="darkness" />
      <Button variant="flat" color="warning" colorvariant="dark" />
      <Button variant="flat" color="warning" />
      <Button variant="flat" color="warning" colorvariant="light" />
      <Button variant="flat" color="warning" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="flat" color="danger" colorvariant="darkness" />
      <Button variant="flat" color="danger" colorvariant="dark" />
      <Button variant="flat" color="danger" />
      <Button variant="flat" color="danger" colorvariant="light" />
      <Button variant="flat" color="danger" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="flat" color="sweet" colorvariant="darkness" />
      <Button variant="flat" color="sweet" colorvariant="dark" />
      <Button variant="flat" color="sweet" />
      <Button variant="flat" color="sweet" colorvariant="light" />
      <Button variant="flat" color="sweet" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="flat" color="info" colorvariant="darkness" />
      <Button variant="flat" color="info" colorvariant="dark" />
      <Button variant="flat" color="info" />
      <Button variant="flat" color="info" colorvariant="light" />
      <Button variant="flat" color="info" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="outline" color="primary" colorvariant="darkness" />
      <Button variant="outline" color="primary" colorvariant="dark" />
      <Button variant="outline" color="primary" />
      <Button variant="outline" color="primary" colorvariant="light" />
      <Button variant="outline" color="primary" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="outline" color="secondary" colorvariant="darkness" />
      <Button variant="outline" color="secondary" colorvariant="dark" />
      <Button variant="outline" color="secondary" />
      <Button variant="outline" color="secondary" colorvariant="light" />
      <Button variant="outline" color="secondary" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="outline" color="success" colorvariant="darkness" />
      <Button variant="outline" color="success" colorvariant="dark" />
      <Button variant="outline" color="success" />
      <Button variant="outline" color="success" colorvariant="light" />
      <Button variant="outline" color="success" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="outline" color="warning" colorvariant="darkness" />
      <Button variant="outline" color="warning" colorvariant="dark" />
      <Button variant="outline" color="warning" />
      <Button variant="outline" color="warning" colorvariant="light" />
      <Button variant="outline" color="warning" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="outline" color="danger" colorvariant="darkness" />
      <Button variant="outline" color="danger" colorvariant="dark" />
      <Button variant="outline" color="danger" />
      <Button variant="outline" color="danger" colorvariant="light" />
      <Button variant="outline" color="danger" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="outline" color="sweet" colorvariant="darkness" />
      <Button variant="outline" color="sweet" colorvariant="dark" />
      <Button variant="outline" color="sweet" />
      <Button variant="outline" color="sweet" colorvariant="light" />
      <Button variant="outline" color="sweet" colorvariant="lightness" />
    </div>

    <div {...stylex.props(styles.wrapper)}>
      <Button variant="outline" color="info" colorvariant="darkness" />
      <Button variant="outline" color="info" colorvariant="dark" />
      <Button variant="outline" color="info" />
      <Button variant="outline" color="info" colorvariant="light" />
      <Button variant="outline" color="info" colorvariant="lightness" />
    </div>
  </main>
);

export default Home;
