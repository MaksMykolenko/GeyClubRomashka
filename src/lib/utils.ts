export const getAssetPath = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const basePath = process.env.NODE_ENV === 'production' ? '/GeyClubRomashka' : '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};
