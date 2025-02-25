export const formatStoreName = (store: string) => {
  if (store.includes("Mc")) return store.split(" ");
  return store;
};
