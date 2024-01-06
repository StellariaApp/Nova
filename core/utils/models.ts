type ModelColorOutput = {
  black: number;
  white: number;
};
type ModelColorInput = {
  r: number;
  g: number;
  b: number;
};
export const ModelColor = (input: ModelColorInput): ModelColorOutput => {
  const inputFloat = new Float32Array([input["r"], input["g"], input["b"]]);
  return {
    white:
      1 /
      (1 +
        1 /
          Math.exp(
            -10.37766170501709 +
              (12.204835891723633 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      6.169667720794678 -
                        4.042087078094482 * (inputFloat[0] || 0) -
                        19.438833236694336 * (inputFloat[1] || 0) +
                        14.434931755065918 * (inputFloat[2] || 0)
                    )) +
              (11.918014526367188 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      2.6512327194213867 -
                        3.513329029083252 * (inputFloat[0] || 0) -
                        17.795860290527344 * (inputFloat[1] || 0) +
                        17.435640335083008 * (inputFloat[2] || 0)
                    )) +
              (9.877058982849121 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      5.760010242462158 -
                        3.2945780754089355 * (inputFloat[0] || 0) -
                        8.6066312789917 * (inputFloat[1] || 0) -
                        7.926300525665283 * (inputFloat[2] || 0)
                    ))
          )),
    black:
      1 /
      (1 +
        1 /
          Math.exp(
            10.386853218078613 -
              (12.263668060302734 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      6.169667720794678 -
                        4.042087078094482 * (inputFloat[0] || 0) -
                        19.438833236694336 * (inputFloat[1] || 0) +
                        14.434931755065918 * (inputFloat[2] || 0)
                    )) -
              (11.879143714904785 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      2.6512327194213867 -
                        3.513329029083252 * (inputFloat[0] || 0) -
                        17.795860290527344 * (inputFloat[1] || 0) +
                        17.435640335083008 * (inputFloat[2] || 0)
                    )) -
              (9.865546226501465 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      5.760010242462158 -
                        3.2945780754089355 * (inputFloat[0] || 0) -
                        8.6066312789917 * (inputFloat[1] || 0) -
                        7.926300525665283 * (inputFloat[2] || 0)
                    ))
          )),
  };
};
