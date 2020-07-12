// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
import { createGlobalStyle } from 'styled-components';

import PlaylistScript from './Playlist Script.otf';
import CormorantGaramondMedium from './CormorantGaramond-Medium.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Playlist Script';
        src: local('Playlist Script'), 
        url(${PlaylistScript}) format('otf');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Cormorant Garamond Medium';
        src: local('CormorantGaramond-Medium'), 
        url(${CormorantGaramondMedium}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;