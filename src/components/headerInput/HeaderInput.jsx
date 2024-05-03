import * as React from 'react';
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import { green as muiGreen } from '@mui/material/colors'; // Переименование переменной green

const Input = React.forwardRef(function CustomInput(props, ref) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

const greenPalette = { // Переименование объекта с цветами
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const InputElement = styled('input')(
  ({ theme }) => `
  width: 350px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2.3;
  padding: 8px 12px;
  border-radius: 25px;
  margin-top:8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };

  &:hover {
    border-color: ${muiGreen[400]}; // Использование переменной muiGreen
  }

  &:focus {
    border-color: ${muiGreen[400]}; // Использование переменной muiGreen
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? muiGreen[600] : muiGreen[200]}; // Использование переменной muiGreen
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

export default function HeaderInput() {
  return <Input  aria-label="Demo input" placeholder="Search…" />;
}