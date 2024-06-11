const initialState = {
    cards: [
        {
            id : 1,
            tittle : 'Alex',
            body :  'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking,'
        },
        {
            id : 2,
            tittle : 'John',
            body :  'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking,'          
        },
        {
            id : 3,
            tittle : 'Mathew',
            body :  'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking,'
        }
    ]
}


const rootReducer = (state = initialState, action) => {
    return state
}

export default rootReducer;