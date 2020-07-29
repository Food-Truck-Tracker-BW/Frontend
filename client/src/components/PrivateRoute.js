import React from 'react';
import {Route, Redirect } from 'react-router-dom';


//* functioning logic 
// const PrivateRoute = ({component: Component, ...rest}) => {
// 	return <Route {...rest} 
// 		render={props => {
// 			if(localStorage.getItem('token')) {
// 				return <Component {...props} />
// 			} else { 
// 				return <Redirect to="/" />
// 			}
// 		}
// 		}	
// 	/>
// };


// * always on for dev
const PrivateRoute = ({component: Component, ...rest}) => {
	return <Route {...rest} 
		render={props => {
			if(true) {				
				return <Component {...props} />
			} else {
				return <Redirect to="/login" />
			}
		}
		}	
	/>
};


export default PrivateRoute;