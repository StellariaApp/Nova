export const ImportRegex =
  /import\s*{\s*([^}]+)\s*}\s*from\s*"(?=@stellaria\/supernova)@stellaria\/supernova"/;

export const CSSConstRegex =
  /(?<var>const|let|var)\s+(?<name>\w+)\s*=\s*css\s*`(?<css>[^]*?)`/;

export const CSSObjectRegex = /(?<name>\w+)\s*:\s*css\s*`(?<css>[^]*?)`/;
