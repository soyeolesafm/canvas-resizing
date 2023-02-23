var canvas = document.querySelector('canvas')
// para cambia el taman~o del canvas al tamano de la ventana de el explorador 
// ! set los margenes de body con css a 0 
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// el siguiente codigo se utliza para obtener las herramientas que te ayudan
// dibujar en el canvas como "fillRect"
c = canvas.getContext('2d')
// fillRect se utiliza para dibujar rectangulos 
// entre parentesis tom los valores de (x,y, hancho, alto) x horizontal y vertical
// *juega con los valores de fillRect para que entiendas un poco mejor
c.fillRect (250,100,100,400)
c.fillRect (100,250,400,100)
c.fillRect (750,100,100,400)
c.fillRect (600,250,400,100)
