import 'styled-components';
import { Theme } from './app/themes';

declare module 'styled-components' {
  // tslint:disable-next-line:no-empty-interface
  export interface DefaultTheme extends Theme {}
}
