import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlueA400, teal300, redA700, red900
  ,grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,} from 'material-ui/styles/colors';
  

  const muiTheme2 = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
      accent1Color: lightBlueA400,
      accent2Color: teal300,
      primary1Color : redA700,
      primary2Color : red900,
      default1Color : redA700,
      borderColor: lightBlueA400,
      shadowColor: fullBlack,
    },
  });

  export default muiTheme2;