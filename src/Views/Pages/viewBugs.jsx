import React, {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getBugs} from '../../Controllers/Redux/bugSlice'
import BugCard from '../Components/Bug Card/bugCard'
import BugView from '../Components/Bug View/bugView'

export default ()=>{
    const [DISPLAY_BUG,SET_DISPLAY_BUG] = useState({
        name:"",
        isDispalayed: false
    })
    const dispatch = useDispatch();
    const {bugs} = useSelector(state=>state);

    useEffect(()=>{
        dispatch(getBugs());
    }, [bugs.length < 1])

    function BugClicked(name){
        console.log(name)
        SET_DISPLAY_BUG({
            isDispalayed:!DISPLAY_BUG.isDispalayed,
            name: name,
        })
    }

    return(
        <div className='page-container'>
            {bugs.map((bug, key)=>(
                <BugCard key={key} bug={bug} clicked={BugClicked} />
            ))}
            {DISPLAY_BUG.isDispalayed && <BugView clicked={BugClicked} bug={bugs.filter((bug) => bug.name === DISPLAY_BUG.name)[0]} />}
        </div>
    )
}