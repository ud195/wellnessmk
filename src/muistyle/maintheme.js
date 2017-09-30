import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green500, green600, green700, blue700, blue800, blue900
  ,grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,} from 'material-ui/styles/colors';
  

  const muiTheme = getMuiTheme({
    fontFamily: 'Archivo Narrow',
    palette: {
      accent1Color: green500,
      accent2Color: green600,
      accent3Color: green700,
      primary1Color : blue700,
      primary2Color : blue800,
      primary3Color : blue900,
      default1Color : green500,
      borderColor: grey300,
      pickerHeaderColor: green600,
      shadowColor: fullBlack,
    },
  });

  export default muiTheme;