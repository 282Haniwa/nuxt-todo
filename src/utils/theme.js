const theme = {
  color: {
    paper: '#ffffff',
    text: '#00214d',
    gray: '#888888',
    border: '#dadada',
    main: '#ff5470',
    lime: '#00ebc7',
  },
  hover: {
    color: 'rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s ease',
  },
};

export const getColor = (color) => {
  return theme.color[color] || color;
};

export default theme;
