import React from 'react';
import {Redirect} from 'react-router-dom';
// import {connect} from 'react-redux'
import store from '../../redux/store'

//   所有组件都要校验 所以 所有组件都要叫=加 @withCheckLogin
function withCheckLogin (WrappedComponent) {
    return class withLogin extends React.Component{
        static displayName = `CheckLogin(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
        render() {
            let {token}=store.getState().user;
            const {location,history,match} =this.props;
            const {pathname} =location;

            if (pathname==='/login' && token){
                return <Redirect to="/"/>
            }
            if (pathname!=='/login' && !token){
                return <Redirect to="/login" />
            }


            return <WrappedComponent history={history} location={location} match={match}/>
        };

    }

}


export default withCheckLogin