export const shortenAddress = (address) => {
  if (!address) return "";
  return address.slice(0, 4) + "..." + address.slice(-4);
};
