export default class inputHandler {

    constructor(spaceship){
        document.addEventListener('keydown', (event) => {

            //65 A 68 D
            switch(event.keyCode){
                case 65:
                    spaceship.moveLeft()
                    break;
                
                case 68:
                    spaceship.moveRight();
                    break;
            }
        })
    }

}