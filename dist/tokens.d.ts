declare const root: RootObject
export default root
interface RootObject {
  spacing: Spacing;
  sizing: Sizing;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  colors: Colors;
  opacity: Opacity;
  fontFamilies: FontFamilies;
  lineHeights: FontFamilies;
  letterSpacing: LetterSpacing;
  paragraphSpacing: ParagraphSpacing;
  fontWeights: FontWeights;
  fontSizes: FontSizes;
  textCase: TextCase;
  textDecoration: TextDecoration;
  typography: Typography;
}
interface Typography {
  display: Display;
}
interface Display {
  value: Value;
  type: string;
  filePath: string;
  isSource: boolean;
  original: Original5;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Original5 {
  value: Value;
  type: string;
}
interface Value {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: number;
  letterSpacing: number;
  paragraphSpacing: number;
  textDecoration: string;
  textCase: string;
}
interface TextDecoration {
  underline: P1;
  none: P1;
}
interface TextCase {
  uppercase: P1;
  capitalize: Capitalize;
  none: Capitalize;
}
interface Capitalize {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original4;
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
  '24': string;
  category: string;
  type: string;
}
interface FontSizes {
  h1: Scale;
  h2: Scale;
  h3: Scale;
  h4: Scale;
  h5: Scale;
  h6: Scale;
  body: Scale;
  sm: Scale;
  xs: Scale;
  display: Scale;
}
interface FontWeights {
  headingRegular: HeadingRegular;
  headingBold: HeadingRegular;
  bodyRegular: HeadingRegular;
  bodyBold: HeadingRegular;
}
interface HeadingRegular {
  value: number;
  type: string;
  filePath: string;
  isSource: boolean;
  original: Original3;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface ParagraphSpacing {
  l: Scale;
  m: Scale;
  sm: Scale;
  xs: Scale;
}
interface LetterSpacing {
  default: Scale;
  increasedM: P1;
  increaseS: P1;
}
interface FontFamilies {
  heading: P1;
  body: P1;
}
interface Opacity {
  low: P1;
  md: P1;
  high: P1;
}
interface Colors {
  P1: P1;
  P2: P1;
  S1: S1;
  Grey: Grey;
  S2: S2;
  S3: S3;
  S5: S5;
  S4: S4;
  S6: S6;
  S7: S7;
  semantic: Semantic;
}
interface Semantic {
  Critical: _200;
  positive: _200;
  negative: _200;
}
interface S7 {
  '900': _2002;
}
interface S6 {
  '200': _200;
  '900': _9006;
}
interface _9006 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original4;
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
  category: string;
  type: string;
  item: string;
}
interface S4 {
  '200': _200;
  '900': _9005;
}
interface S5 {
  '200': _2003;
  '900': _9005;
}
interface _9005 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original4;
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
  category: string;
  type: string;
  item: string;
}
interface _2003 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original4;
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
  category: string;
  type: string;
  item: string;
}
interface S3 {
  '200': _2002;
  '900': _9004;
}
interface _9004 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original4;
  name: string;
  attributes: Attributes8;
  path: string[];
  comment: string;
}
interface Attributes8 {
  '0': string;
  '1': string;
  '2': string;
  category: string;
  type: string;
  item: string;
}
interface _2002 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original4;
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
  category: string;
  type: string;
  item: string;
}
interface S2 {
  '200': _200;
  '900': _9003;
}
interface _9003 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original4;
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
  category: string;
  type: string;
  item: string;
}
interface Grey {
  '100': _200;
  '200': _200;
  '500': _200;
  '800': _200;
  '900': _9002;
}
interface _9002 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original4;
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
  category: string;
  type: string;
  item: string;
}
interface S1 {
  '200': _200;
  '500': _200;
  '900': _900;
}
interface _900 {
  value: string;
  type: string;
  description: string;
  filePath: string;
  isSource: boolean;
  original: Original4;
  name: string;
  attributes: Attributes4;
  path: string[];
  comment: string;
}
interface Attributes4 {
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
  category: string;
  type: string;
  item: string;
}
interface Original4 {
  value: string;
  type: string;
  description: string;
}
interface _200 {
  value: string;
  type: string;
  filePath: string;
  isSource: boolean;
  original: Original3;
  name: string;
  attributes: Attributes3;
  path: string[];
}
interface Attributes3 {
  category: string;
  type: string;
  item: string;
}
interface P1 {
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
  value: string;
  type: string;
}
interface BorderWidth {
  none: Scale;
  xs: Scale;
}
interface BorderRadius {
  sm: Scale;
}
interface Sizing {
  scale: Scale;
  xs: Scale;
  sm: Scale;
  md: Scale;
  lg: Scale;
  xl: Scale;
}
interface Spacing {
  scale: Scale;
  xs: Scale;
  sm: Scale;
  md: Scale;
  lg: Scale;
  xl: Scale;
  xxl: Xxl;
}
interface Xxl {
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
  category: string;
  type: string;
}
interface Original2 {
  value: number;
  type: string;
  description: string;
}
interface Scale {
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
  value: number;
  type: string;
}