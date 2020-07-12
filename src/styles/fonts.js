// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
import { createGlobalStyle } from 'styled-components';

// import PlaylistScript from './Playlist Script.otf';
// import CormorantGaramondMedium from './CormorantGaramond-Medium.ttf';

export default createGlobalStyle`
    @font-face {font-family: "Playlist"; src: url("//db.onlinewebfonts.com/t/1fed4454352f201d52b65ca5480afb2d.eot"); src: url("//db.onlinewebfonts.com/t/1fed4454352f201d52b65ca5480afb2d.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/1fed4454352f201d52b65ca5480afb2d.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/1fed4454352f201d52b65ca5480afb2d.woff") format("woff"), url("//db.onlinewebfonts.com/t/1fed4454352f201d52b65ca5480afb2d.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/1fed4454352f201d52b65ca5480afb2d.svg#Playlist") format("svg"); }
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
`;