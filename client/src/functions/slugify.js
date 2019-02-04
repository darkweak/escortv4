export const slugify = (text) => {
  return text.toLowerCase().replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};
