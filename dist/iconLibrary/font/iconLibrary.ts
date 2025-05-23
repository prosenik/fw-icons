export type IconLibraryId =
  | 'search'
  | 'zoom-out-line';

export const ICON_LIBRARY_CODEPOINTS: { [key in IconLibraryId]: string } = {
  'search': '61697',
  'zoom-out-line': '61698',
};
