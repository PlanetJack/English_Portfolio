'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 150,
}) // 'an enthusiastic Coder'

.move(null, {to: 'END'})
.delete()
.type('Robotics Developer')
.pause(1000)
.move(null, {to: 'END'})
.delete()
.type('Full stack Developer')
.pause(1000)
.delete()
.go(); 
