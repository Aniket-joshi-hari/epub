const initState = {
	
	books : {},
   
    ContactForm : {}
}




const rootReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'UPDATE_Books_Data':
            const newBooks = {
				
                ePubUrl: action.booksData.ePubUrl,
                
            }
            return {
                ...state,
                books: newBooks
			}
			case 'UPDATE_Rack':
			return{
				...state,
				rack :action.rackid
            }
            
            case 'UPDATE_Map':
            const MapData ={
                address : action.map.address,
                lat : action.map.lat,
                lng : action.map.lng
            }
            return{
                ...state,
                map : {...MapData}
                
            }
            case 'UPDATE_ContactUs':
            const ContactForm ={
              email : action.ContactInfo.email,
              message : action.ContactInfo.message
            }
            return{
                ...state,
                ContactForm : {...ContactForm}
            }
        default:
    }
    return state;

};



export default rootReducer;