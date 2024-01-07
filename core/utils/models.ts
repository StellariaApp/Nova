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

export const ColorModelNew = (input: any): any => {
  var net = {
    layers: [
      { r: {}, g: {}, b: {} },
      {
        "0": {
          bias: 93.18674486228824,
          weights: {
            r: -49.23710666820998,
            g: -41.26038911690508,
            b: -13.207081538684058,
          },
        },
        "1": {
          bias: 29.624393444967406,
          weights: {
            r: -73.37991424304838,
            g: 14.654210806646807,
            b: 23.54287461346147,
          },
        },
        "2": {
          bias: 50.9780280840309,
          weights: {
            r: -14.07710640593053,
            g: -60.362594715040856,
            b: -5.569210613131002,
          },
        },
      },
      {
        light: {
          bias: 1.3483593541357708,
          weights: {
            "0": -30.282484289769208,
            "1": 27.737987907219818,
            "2": -17.729778773782588,
          },
        },
        dark: {
          bias: -1.348359361133872,
          weights: {
            "0": 30.282484651942053,
            "1": -27.73798826700474,
            "2": 17.729779781332436,
          },
        },
      },
    ],
    outputLookup: true,
    inputLookup: true,
  };

  for (var i = 1; i < net.layers.length; i++) {
    var layer = net.layers[i] as any;
    var output = {} as any;

    for (var id in layer) {
      var node = layer[id];
      var sum = node.bias;

      for (var iid in node.weights) {
        sum += node.weights[iid] * input[iid];
      }
      output[id] = 1 / (1 + Math.exp(-sum));
    }
    input = output;
  }
  return output;
};
