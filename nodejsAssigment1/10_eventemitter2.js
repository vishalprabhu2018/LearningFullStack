/*
10. In continuation of the 8th question, let's now explore the concept of the maximum number of listeners
allowed for event handlers1 For this coding challenge, your task is to determine the current maximum
number of event listeners associated with an event and then set the maximum number of event listeners to
51 Note that the default maximum number of listeners might vary1 Your task is to limit the number of listeners
to 51

*/

const events=require('events');

const eventEmitter=new events();

function subscribeMessage(channelName){
    console.log(`Thanks for subscribing to ${channelName}`)
}

eventEmitter.addListener('subscribe',subscribeMessage);

eventEmitter.emit('subscribe','vishal prabhu');

console.log(`The default maxixmum number of event listeners are : ${eventEmitter.getMaxListeners()}`)
eventEmitter.setMaxListeners(5);
console.log(`The updated maxixmum number of event listeners are : ${eventEmitter.getMaxListeners()}`)