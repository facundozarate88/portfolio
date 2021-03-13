import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
]
