"use client";

import { useState } from "react";
import { COLORS, COLORSDATAMODEL } from "../../../core/constants/colors";
import { Button } from "../../../core/components";

type Props = {};

const Page = (props: Props) => {
  const [contrast, setContrast] = useState(COLORS.map(() => "#1d1d1d"));

  console.log(COLORSDATAMODEL);

  return (
    <div>
      {COLORS.map((e, idx) => (
        <Button
          key={e + idx}
          onClick={() => {
            setContrast((prev) => {
              const next = [...prev];
              next[COLORS.indexOf(e)] =
                next[COLORS.indexOf(e)] === "#1d1d1d" ? "#fafafa" : "#1d1d1d";
              return next;
            });
          }}
          stylex={() => ({
            backgroundColor: e,
            borderColor: e,
            color: contrast[COLORS.indexOf(e)],
          })}
        />
      ))}
      <div>
        <Button
          onClick={() => {
            const colorsWithContrast = COLORS.map((e, idx) => [
              e,
              contrast[idx],
            ]);
            console.log(colorsWithContrast);
          }}
        >
          Log
        </Button>
      </div>
    </div>
  );
};

export default Page;
