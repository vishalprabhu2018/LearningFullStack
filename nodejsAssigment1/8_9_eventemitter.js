/*8. Let's simulate a subscription feature similar to YouTube1 Using the events module, we'll create a custom
event named "subscribe"1 When this event is triggered, it should display a message in the console indicating
that the user has subscribed1 */

/*
8. Let's simulate a subscription feature similar to YouTube1 Using the events module, we'll create a custom
event named "subscribe"1 When this event is triggered, it should display a message in the console indicating
that the user has subscribed1

9. While working with the events module, one interesting observation is that when an event is created and
called, the associated event handler is triggered1 However, what happens if we remove an event and then
try to call it? In this coding challenge letes create an event handler and call it1 Later letes remove the event
handler and observe what happens when we call it0

*/
const events=require('events');

const eventEmitter=new events();

function subscribeMessage(channelName){
    console.log(`Thanks for subscribing to ${channelName}`);

}


eventEmitter.addListener( 'subscribe', subscribeMessage);
eventEmitter.emit('subscribe','Vishal Prabhu');


//Q8
console.log('calling event listener after removing the event')
eventEmitter.removeListener('subscribe',subscribeMessage);
eventEmitter.emit('subscribe', 'vikas prabhu')  