function mondayWork(str = "go to the office"){
    return(`This Monday, I will ${str}.`);
}
function saturdayFun(activity = "roller-skate"){
return(`This Saturday, I want to ${activity}!`);
}
function wrapAdjective(flair = '*'){
return function (adjective = "special"){
    return(`You are ${flair}${adjective}${flair}!`);
}
}