////////////////////////////////////////////////////////////////////////////////////////////////////
//Redux Dev Tools

	//We're going to start working with the Redux-Form lib, debugging will be much easier with 
	//REDUX DEV TOOLS:
		//github.com/zalmoxisus/redux-devtools-extension
			//this is a chrome browser extension that will allow you to very easily debug your
			//redux store:
				//can see what data is inside the store!

		//Installation:
			//dl from chrome web store
			
		//Advanced Store Setup: we're going to have some code to set this up properly...
			//If you setup your store with middleware and enhancers, change:
			  import { createStore, applyMiddleware, compose } from 'redux';

			+ const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
			+ const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
			//- const store = createStore(reducer, /* preloadedState, */ compose(
			    applyMiddleware(...middleware)
			  ));

	//src/index.js:
		//find redux import:
		import { createStore, appleMiddleware, compose } from 'redux'

		//declare composeEnhancers:
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

		//now pass this to our redux store:
			const store = createStore(
				reducers,
				composeEnhancers(applyMiddleware())
			);//we can call applyMiddleware w/o any args and see no errors

	//Ok - let's check out our Redux Dev tools:
		//state panel:
			//--> can easily see all the data sitting inside redux app:
		//left panel:
			//list of all different actions that have been dispatched to our redux store
				//--> we can use this to jump back in time in our app.
					//when hover on an action and click 'jump' 
						//==> state panel reflects the state at that time!! 
		//Something neat
			//if you go to airbnb.com
				//--> they have their redux side publicly available on redux dev tools
					//--> could be a good way to see what pros do w/ their sites for learning
		//If you're ever stuck looking at someone else's redux then remember to change 
		//the INSTANCE DIALOGUE!
////////////////////////////////////////////////////////////////////////////////////////////////////
//Debug Sessions with Redux Dev Tools

	//in address bar navigar to this:
		//localhost:3000?debug_session=<some_string>
			//saves all data in Redux Store between refreshes of the page
				//this is good b/c it'll have the same action creators on left panel even when refreshing
					//**this isn't working for you!  when you refresh redux dev tools 
					//**calls signIn action creator!
////////////////////////////////////////////////////////////////////////////////////////////////////