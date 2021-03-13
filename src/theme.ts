import { darken, lighten } from 'polished'

const colors = {
  primary: '#6ac76a',
  secondary: 'transparent'
};

const buttonStyles = {
  'border': 'none',
  'font-weight': '700',
  'border-radius': '100px',
  'cursor': 'pointer',
  'box-shadow': '2px 4px 3.5px rgba(0, 0, 0, 0.2)',
  'padding': '1em 3em',
  'color': 'white',
  'outline': 'none',
  '&:active': {
    transition: 'transform .01s ease-in',
    transform: 'translate(0, 1.5px)',
    'box-shadow': '1px 2px 1px rgba(0, 0, 0, 0.2)'
  },
  '&:hover': {
    transition: 'background-color .3s'
  }
};

const theme = {
  colors,
  buttons: {
    primary: {
      ...buttonStyles,
      background: colors.primary,
      '&:hover': {
        background: darken(.1, colors.primary)
      }
    },
    secondary: {
      ...buttonStyles,
      background: colors.secondary,
      border: '1px solid #c3c3c3',
      color: '#333',
      '&:hover': {
        background: lighten(0.2, '#c3c3c3')
      }
    },
    disabled: {
      ...buttonStyles,
      cursor: 'default',
      background: 'rgb(0, 0, 0, .25)',
      'box-shadow': 'none'
    }
  }
};

export default theme;
