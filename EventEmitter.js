const EventEmitter = () => {
  let subscribers = [];
  
  const subscribe = (type, callback) => {
    subscribers[type] = subscribers[type] || [];
    subscribers[type].push(callback); 
  };
  
  const notify = (value, fn) => {
    try {
      fn(value);
    }
    catch(e) { console.error(e); }
  };
  
  const publish = (type, value) => {
    if(subscribers[type]){
      let notifySubscriber = notify.bind(null, value);
      subscribers[type].forEach(notifySubscriber);
    }
  };
  
  return Object.freeze({
    subscribe,
    publish
  });
 };
 
 let eventEmitter = EventEmitter();
 eventEmitter.subscribe("update", () => console.log(2));
 eventEmitter.publish("update", {});