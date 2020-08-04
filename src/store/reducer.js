const INITIAL={
    number_of_people:0,
    startDate: new Date(),
    endDate: new Date(),
    From: "",
    Destination:"",
    TotalPrice:0,
    AllOrders:[],
    Names:[]
}

const reducer=(state=INITIAL,action)=>{
    switch(action.type){
        case "Sdate":
            return {
                ...state,
                startDate:action.val
            }
        case "Edate":
            return {
                ...state,
                endDate:action.val
            }
        case "Num":
            return{
                ...state,
                number_of_people:action.val
            }
        case "From":
            return{
                ...state,
                From:action.val
            }
        case "To":
            return{
                ...state,
                Destination:action.val
            }
        case "Price":
            return{
                ...state,
                TotalPrice:action.val
            }
        case "store":
            const update=state.AllOrders.concat([[state.From,state.Destination,state.TotalPrice]])
            return{
                ...state,
                AllOrders:update
            }
        case "name":
            const update1=state.Names.concat([action.val])
            return{
                ...state,
                Names:update1
            }
    }
    return state
}

export default reducer