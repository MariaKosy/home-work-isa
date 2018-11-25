function Timer(){
    
}

Timer.prototype.prepareDOM = function(){
    this.container = document.getElementsByTagName('body')[0];
  this.timerContainer = document.createElement('div');
  
  //start
  this.timerStart = document.createElement('div');
  this.timerStart.innerText = 'start';
  
  this.timerStart.addEventListener('click', () => {
    this.start();
  })
    
  //stop
    this.timerStop = document.createElement('div');
  this.timerStop.innerText = 'stop';
  
  this.timerStop.addEventListener('click', () => {
      this.stop();
  })
  
  //reset
    this.timerReset = document.createElement('div');
  this.timerReset.innerText = 'reset';
  
  this.timerReset.addEventListener('click', () => {
      this.stop();
    this.reset();
  })
  
  //insert elements to the DOM
  
  this.container.appendChild(this.timerContainer);
  this.container.appendChild(this.timerStart);
  this.container.appendChild(this.timerStop);
  this.container.appendChild(this.timerReset);
  
  this.render();
}

Timer.prototype.render = function(){
    this.timerContainer.innerHTML = this.time; 
}

Timer.prototype.start = function(){
    if(this.interval){
      return;
  }
  
    this.interval = setInterval(() => {
      this.time = this.time + 50;
    this.render();
  }, 50)
}

Timer.prototype.stop = function(){
    clearInterval(this.interval);
  delete this.interval;
  this.render();
}





class Timer {
  constructor() {
    this.time = 0;
    this.prepareDOM(); 
  }
  stop(){
    
  }

  reset(){
    this.time = 0;
   this.render();
  }

}


new Timer();
new Timer();
new Timer();