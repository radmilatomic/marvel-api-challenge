const initialState={
	
}

const rootReducer=(state=initialState,action)=>{
	
	 switch (action.type) {

    case "HEROES":
    return Object.assign({},state, {heroes:action.heroes});

    default:
    return state;
}
}

export default rootReducer;