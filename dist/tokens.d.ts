declare const root: RootObject
export default root
interface RootObject {
  Primary: Primary;
  Secondary: Secondary;
  Grey: Grey;
  Semantic: Semantic;
  Interaction: Interaction;
  Shadow: Shadow;
  fontFamilies: FontFamilies;
  lineHeights: LineHeights;
  fontWeights: FontWeights;
  fontSize: FontSize;
  letterSpacing: LetterSpacing;
  paragraphSpacing: ParagraphSpacing;
  'text-base': Textbase;
  'text-m': Textbase;
  'text-lg': Textlg;
  'text-xl': Textlg;
  'text-s': Textlg;
  'text-xs': Textlg;
  'Heading 6': Heading6;
  'Heading 1': Heading1;
  'Heading 2': Heading2;
  'Heading 3': Heading2;
  'Heading 4': Heading2;
  'Heading 5': Heading2;
  textCase: TextCase;
  textDecoration: TextDecoration;
  breakpoints: Breakpoints;
  borderRadius: BorderRadius;
  space: Space;
  borderWidth: BorderWidth;
  opacity: Opacity;
}
interface Opacity {
  '20': _20;
  '30': _20;
  '40': _20;
  '50': _20;
  '60': _20;
  '70': _20;
  '80': _20;
  '85': _20;
  '90': _20;
  '95': _20;
  base: _20;
}
interface _20 {
  value: number;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original8;
  name: string;
  attributes: Attributes4;
  path: string[];
  comment: string;
}
interface BorderWidth {
  '1': _03;
  '2': _03;
}
interface Space {
  '0': _03;
  '2': _2;
  '3': _2;
  '4': _2;
  '5': _2;
  '6': _2;
  '7': _2;
  '8': _2;
  '9': _2;
  '10': _2;
  base: _03;
}
interface _2 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original8;
  name: string;
  attributes: Attributes2;
  path: string[];
  comment: string;
}
interface _03 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original8;
  name: string;
  attributes: Attributes4;
  path: string[];
  comment: string;
}
interface BorderRadius {
  S: _1;
  none: _1;
}
interface Breakpoints {
  xl: Xl;
  md: Md;
  ms: Ms;
  sm: Sm;
}
interface Sm {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original8;
  name: string;
  attributes: Attributes13;
  path: string[];
  comment: string;
}
interface Attributes13 {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  category: string;
  type: string;
}
interface Ms {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original8;
  name: string;
  attributes: Attributes12;
  path: string[];
  comment: string;
}
interface Attributes12 {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  '15': string;
  '16': string;
  '17': string;
  '18': string;
  '19': string;
  '20': string;
  '21': string;
  '22': string;
  '23': string;
  category: string;
  type: string;
}
interface Md {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original8;
  name: string;
  attributes: Attributes11;
  path: string[];
  comment: string;
}
interface Attributes11 {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  '15': string;
  '16': string;
  '17': string;
  '18': string;
  '19': string;
  '20': string;
  '21': string;
  '22': string;
  '23': string;
  '24': string;
  '25': string;
  '26': string;
  '27': string;
  '28': string;
  '29': string;
  '30': string;
  '31': string;
  '32': string;
  '33': string;
  '34': string;
  '35': string;
  '36': string;
  '37': string;
  '38': string;
  '39': string;
  '40': string;
  '41': string;
  category: string;
  type: string;
}
interface Xl {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original8;
  name: string;
  attributes: Attributes10;
  path: string[];
  comment: string;
}
interface Attributes10 {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  '15': string;
  '16': string;
  '17': string;
  '18': string;
  '19': string;
  '20': string;
  '21': string;
  '22': string;
  '23': string;
  '24': string;
  '25': string;
  '26': string;
  '27': string;
  '28': string;
  '29': string;
  '30': string;
  '31': string;
  '32': string;
  '33': string;
  '34': string;
  '35': string;
  '36': string;
  '37': string;
  '38': string;
  '39': string;
  '40': string;
  '41': string;
  '42': string;
  '43': string;
  '44': string;
  '45': string;
  '46': string;
  '47': string;
  '48': string;
  '49': string;
  '50': string;
  '51': string;
  '52': string;
  '53': string;
  '54': string;
  '55': string;
  '56': string;
  '57': string;
  '58': string;
  '59': string;
  '60': string;
  '61': string;
  '62': string;
  '63': string;
  '64': string;
  '65': string;
  '66': string;
  '67': string;
  '68': string;
  '69': string;
  '70': string;
  '71': string;
  category: string;
  type: string;
}
interface Original8 {
  value: number;
  type: string;
  description: string;
}
interface TextDecoration {
  none: _1;
  underline: _1;
}
interface TextCase {
  none: _1;
  uppercase: _1;
}
interface Heading2 {
  L: Regular2;
  S: Regular2;
}
interface Heading1 {
  L: L;
  S: Regular2;
}
interface L {
  value: Value2;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original7;
  name: string;
  attributes: Attributes9;
  path: string[];
  comment: string;
}
interface Attributes9 {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  '15': string;
  '16': string;
  '17': string;
  '18': string;
  '19': string;
  '20': string;
  '21': string;
  '22': string;
  '23': string;
  '24': string;
  '25': string;
  '26': string;
  '27': string;
  '28': string;
  '29': string;
  '30': string;
  category: string;
  type: string;
}
interface Original7 {
  value: Value2;
  type: string;
  description: string;
}
interface Heading6 {
  default: Regular2;
  underline: Regular2;
}
interface Textlg {
  regular: Regular3;
  light: Regular3;
  bold: Regular3;
  underline: Regular3;
}
interface Regular3 {
  value: Value2;
  type: string;
  bold: Bold;
  filePath: string;
  isSource: boolean;
  original: Original6;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Original6 {
  value: Value2;
  type: string;
  bold: Bold;
}
interface Bold {
  value: Value3;
  type: string;
  filePath: string;
  isSource: boolean;
}
interface Value3 {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  paragraphSpacing: string;
  textCase: string;
  textDecoration: string;
}
interface Textbase {
  regular: Regular2;
  light: Regular2;
  bold: Regular2;
  underline: Regular2;
}
interface Regular2 {
  value: Value2;
  type: string;
  filePath: string;
  isSource: boolean;
  original: Original5;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Original5 {
  value: Value2;
  type: string;
}
interface Value2 {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: number;
  letterSpacing: string;
  paragraphSpacing: number;
  textCase: string;
  textDecoration: string;
}
interface ParagraphSpacing {
  '0': _02;
  '1': _02;
}
interface LetterSpacing {
  '0': _1;
  '1': _1;
}
interface FontSize {
  '0': _02;
  '1': _02;
  '2': _02;
  '3': _02;
  '4': _02;
  '5': _02;
  '6': _02;
  '7': _02;
  '8': _02;
}
interface _02 {
  value: string;
  type: string;
  filePath: string;
  isSource: boolean;
  original: Original4;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Original4 {
  value: number;
  type: string;
}
interface FontWeights {
  regular: Regular;
  bold: Regular;
  light: Regular;
}
interface Regular {
  value: number;
  type: string;
  filePath: string;
  isSource: boolean;
  original: Original;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface LineHeights {
  '0': _1;
  '1': _1;
  '2': _1;
}
interface FontFamilies {
  body: _1;
  heading: _1;
}
interface Shadow {
  Card: Card;
  Chip: Card;
}
interface Card {
  value: string;
  type: string;
  filePath: string;
  isSource: boolean;
  original: Original3;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Original3 {
  value: Value;
  type: string;
}
interface Value {
  color: string;
  type: string;
  x: number;
  y: number;
  blur: number;
  spread: number;
}
interface Interaction {
  '1': _1;
  '2': _1;
  '3': _1;
}
interface Semantic {
  Critical: _1;
  Negative: _1;
  Positive: _1;
}
interface Grey {
  '0': _0;
  '1': _12;
  '2': _12;
  '3': _6;
  '4': _7;
}
interface _0 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes8;
  path: string[];
  comment: string;
}
interface Attributes8 {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  '15': string;
  '16': string;
  '17': string;
  '18': string;
  '19': string;
  '20': string;
  '21': string;
  '22': string;
  '23': string;
  '24': string;
  '25': string;
  '26': string;
  '27': string;
  '28': string;
  '29': string;
  '30': string;
  '31': string;
  '32': string;
  '33': string;
  '34': string;
  '35': string;
  '36': string;
  '37': string;
  '38': string;
  '39': string;
  '40': string;
  '41': string;
  '42': string;
  '43': string;
  category: string;
  type: string;
}
interface Secondary {
  '1': _12;
  '2': Accent;
  '3': _12;
  '4': _4;
  '5': _5;
  '6': _6;
  '7': _7;
  '8': _6;
  '9': _7;
}
interface _7 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes7;
  path: string[];
  comment: string;
}
interface Attributes7 {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  category: string;
  type: string;
}
interface _6 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes6;
  path: string[];
  comment: string;
}
interface Attributes6 {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  category: string;
  type: string;
}
interface _5 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes5;
  path: string[];
  comment: string;
}
interface Attributes5 {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  category: string;
  type: string;
}
interface _4 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes4;
  path: string[];
  comment: string;
}
interface Attributes4 {
  '0': string;
  '1': string;
  '2': string;
  category: string;
  type: string;
}
interface _12 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes3;
  path: string[];
  comment: string;
}
interface Attributes3 {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  category: string;
  type: string;
}
interface Primary {
  '1': _1;
  '2': _1;
  accent: Accent;
}
interface Accent {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes2;
  path: string[];
  comment: string;
}
interface Attributes2 {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  category: string;
  type: string;
}
interface Original2 {
  value: string;
  type: string;
  description: string;
}
interface _1 {
  value: string;
  type: string;
  filePath: string;
  isSource: boolean;
  original: Original;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Attributes {
  category: string;
  type: string;
}
interface Original {
  value: string;
  type: string;
}