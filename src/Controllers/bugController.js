import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:23456789,
        name:"Crash on load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Cody Sullivan",
        creator:"Darren Waterson",
        priority:1,
        time:"14:58",
    }))
    data.push(new bugModel({
        _id:23456789,
        name:"Wont Load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Cody Sullivan",
        creator:"Relle Mayor",
        priority:3,
        time:"14:58",
    }))
    data.push(new bugModel({
        _id:23456789,
        name:"Access Expired",
        details:"passowrd not working",
        steps:"Entered new password and no access",
        version:"V2.0",
        assigned:"Cody Sullivan",
        creator:"David Smith",
        priority:2,
        time:"14:58",
    }))

    let sorted  = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;
}