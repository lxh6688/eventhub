import EventHub from "../src/index";

console.log(EventHub);

const eventHub = new EventHub();

console.assert(eventHub instanceof Object === true, "eventHub 是个对象");

// on emit
let called = false
eventHub.on('xxx', y => {
    called = true;
    console.log("called:" + called)
    console.log(y)
    console.assert(y === "今天林志玲结婚了")
})
eventHub.emit('xxx',"今天林志玲结婚了")

const eventHub2 = new EventHub()
let called2 = false
const fn1 = ()=>{
  called2 = true
}
eventHub.on("yyy", fn1)
eventHub.off("yyy",fn1)
eventHub.emit("yyy")
setTimeout(()=>{
  console.log(called2)
},1000)