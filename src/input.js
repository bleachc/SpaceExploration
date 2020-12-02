export default class inputHandler {

    constructor(spaceship){
        document.addEventListener('keydown', (event) => {
            /**
             * Keycode is being deprecated
             * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
             */
            //65 A 68 D
            switch(event.keyCode){
                case 65:
                    spaceship.moveLeft()
                    break;
                
                case 68:
                    spaceship.moveRight();
                    break;
                
                case 32:
                    spaceship.shoot();
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {

            //65 A 68 D
            switch(event.keyCode){
                case 65:
                    if(spaceship.speed < 0)
                    spaceship.stop()
                    break;
                
                case 68:
                    if(spaceship.speed > 0)
                    spaceship.stop();
                    break;
            }
        })
    }

}
