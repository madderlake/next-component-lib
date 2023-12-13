const DPPX_PREFIX = "min-resolution: ";
const DPPX_SUFFIX = "dppx";

const handleWKMinDevicePixelRatio = (query: string): string => {
  const dppxPrefixIdx = query.indexOf(DPPX_PREFIX);
  if (dppxPrefixIdx === -1) {
    return query;
  }

  const splitStr = query.substring(
    dppxPrefixIdx + DPPX_PREFIX.length,
    query.length
  );

  const dppxSuffixIndex = splitStr.indexOf(DPPX_SUFFIX);
  if (dppxSuffixIndex === -1) {
    return query;
  }

  const dppxVal = parseFloat(splitStr.substring(0, dppxSuffixIndex));
  if (isNaN(dppxVal)) {
    return query;
  }

  return `(-webkit-min-device-pixel-ratio: ${dppxVal}), ${query}`;
};

// Basic autoprefix support to add webkit-min-device-pixel-ratio and "only screen" to media queriea
export const autoprefixQuery = (key: string, query: string): string => {
  if (key === "retina") {
    query = handleWKMinDevicePixelRatio(query);
  }

  return query;
};
