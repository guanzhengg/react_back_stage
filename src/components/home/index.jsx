

import React from 'react';
import withCheckLogin from '../../containers/with-check-login/index'
@withCheckLogin
 class Home extends React.Component{
    render() {
        return (
           <div>home</div>
        );
    };

}
export default Home