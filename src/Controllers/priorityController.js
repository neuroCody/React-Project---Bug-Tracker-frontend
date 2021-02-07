const colors = ["#f8184d","#f8ab12","#92d61c"]

export default (priority)=>{
    const level = ["High","Medium","Low"]
    return{
        level:(level[priority-1]),
        color:colors[priority-1]
    }
}