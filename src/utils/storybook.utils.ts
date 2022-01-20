/**
 * @param assetPath
 * @example
 *   getAssetUrl('/storybook-assets/some_file.ext');
 */
export function getAssetUrl(assetPath: string) {
  return assetPath.replace(/^\/storybook-assets\//, './');
}
