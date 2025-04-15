// synchronous - ek ke baad doosra start hoga jab tak ek khatam nhi hoga doosra chaalu nhi hoga
// asynchronous - saare kaam ek saath chalu karenge jiska ans pehle ho gya usko pehle start kar do
// setTimeout, setInterval, promises, fetch etc is asynchronous

// jo bhi main stack i.e. execution me hota hai wo output karta hai aur jo side stack me hota hai wo behind the scenes processing kar rha hota hai taaki jab uski
// processing complete ho use main stack me laa kar chalaya ja sake 

// jab main stack khaali hota hai tab check karte hai ki side stack ki processing ho gayi hogi toh fir use
// main stack me laayenge

// event loop main stack me cheeze laata hai side stack me se


console.log("Hey1")
console.log("Hey2")
setTimeout(function () {
    console.log("Hey3")
}, 0)
console.log("Hey4") // output would be 1 2 4 3 cause 3 is async and waiting in side stack and after main stack is empty side stack is executed

// js is single threaded and therefore is not asynchornous i.e., a and b saath me execute nhi ho reh hote
// a ka ek part hota hai fir b ka ek part and this is done very fast so it appears to be async but is not


//callback hamesha ek function hota hai and ye sirf tab chalta hai jab async code ka completion ho jaata hai 
