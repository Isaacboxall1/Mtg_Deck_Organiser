import { ThemeSupa } from '@supabase/auth-ui-shared'

export const supabaseTheme = { theme: ThemeSupa, variables: {
    dark: {
      colors: {
        brand: '#f19e38',
        brandAccent: '#f19f00',
        inputText: 'white',
        inputLabelText: 'white',
        messageText: 'white',
      },
      fonts: {
      bodyFontFamily: `Woodland Bold`,
      buttonFontFamily: `Woodland Bold`,
      inputFontFamily: `ui-sans-serif, sans-serif`,
      labelFontFamily: `ui-sans-serif, sans-serif`,
},
},
}, }