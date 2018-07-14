const Queue = () => {
    let list = [];
    
    const enqueue = value => { 
        list.push(value); 
    }
    const dequeue = () => list.shift();
    
    return Object.freeze({
      enqueue,
      dequeue
    });
   };
   
   const queue = Queue();
   
   queue.enqueue(1);
   console.log(queue.dequeue())