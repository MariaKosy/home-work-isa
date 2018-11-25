class Game {
    constructor(){
      this.gameContainer = document.getElementById('game');
    this.cross = new Cross();
    
    this.gameContainer.addEventListener('mousemove',(event) => {
      this.cross.update(event.offsetX, event.offsetY)
    }  
    
    )
    
    this.gameContainer.addEventListener('click',(event) => {
      this.cross.update(event.offsetX, event.offsetY)
      // istnieje na liscie przeciwników jakiś którego  współrzędnych przeciwnika
      const lisTofHitEnemies = this.enemies.filter( enemy => ( Math.abs(event.offsetX - enemy.x) < 10  && Math.abs(event.offsetY - enemy.y) < 10))
      if(!lisTofHitEnemies.length){
          this.enemies.push(new Enemy());
          this.render();
      } else {
        this.enemies = this.enemies.filter( enemy => !lisTofHitEnemies.includes(enemy));
        this.render();
      }
      
    }  
    )
    
    
    this.enemies = [
        new Enemy(), 
      new Enemy(), 
      new Enemy(), 
      new Enemy()
    ];
    
    this.render();
  }  

  render() {
    this.enemies.forEach(enemy => {
      this.gameContainer.appendChild(enemy.enemyElement);
  })
  }

}

class Cross {
    constructor(x = 100, y = 100){
      this.crossElement = document.getElementById('cross')
      this.x = x;
    this.y = y;
  }
  
  update(x, y){
      this.x = x;
    this.y = y;
  
      this.crossElement.style.left = this.x + 'px';
      this.crossElement.style.top = this.y + 'px';
  }
}

class Enemy {
    constructor(){
      this.x = Math.floor(Math.random() * 99);
    this.y = Math.floor(Math.random() * 99);
    
    const element = document.createElement('div');
    element.classList.add('enemy');
    element.style.left = this.x + 'px';
      element.style.top = this.y + 'px';
    
    
       this.enemyElement = element;
  }
}

class Triangle extends Enemy{

}

class Triangle2 extends Enemy{

}

console.log(new Game())
