import { createTheme } from '@mui/material'


export const DefaultPalette = {
  primary: {
    main: '#242632'
  },
  secondary: {
    main: '#6E7072'
  },
  background: {
    default: '#1A1D29',
    surface: '#F2F3EF'
  }
}

export const theme = createTheme({

  palette: DefaultPalette,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: 'large'
      },
      styleOverrides: {
        root: {
          borderRadius: '12px',
          fontWeight: '500',
          fontSize: '16px',
          textTransform: 'none'
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'medium',
        variant: 'outlined',
        autoComplete: 'off',
        InputProps: {
          sx: {
            borderRadius: '12px'
          }
        }
      },
      styleOverrides: {
        root: {
          borderRadius: '12px'
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        size: 'medium',
        variant: 'outlined'
      },
      styleOverrides: {
        root: {
          borderRadius: '12px'
        }
      }
    }
  }
})
