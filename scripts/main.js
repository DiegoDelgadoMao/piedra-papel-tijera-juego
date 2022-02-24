import {containerGame,niveles_button,start_button,h1,modal,manos,manoUserDOM,manoPcDOM,puntajeUser,puntajePc,counter_rondas,boton_reiniciar, nivelesGame} from './variables.js';

let rondas = 0;
let rondaUser = 0;
let rondaPc = 0;
let randomNumber;
let numeroAdivinador;

const nivelFacil = (manoJugador) =>{
	randomNumber =  Math.floor(Math.random()*3);
	rondas += 1;
	counter_rondas.textContent = `rondas: ${rondas}`;
	switch (randomNumber) {
		case 0:
			//manoPc = 'tijeras';
			manoPcDOM.setAttribute('src','./assets/tijera-circle.svg');
			if(manoJugador === 'tijeras'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/tijera-circle.svg');
			}
			else if(manoJugador === 'papel'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/papel-circle.svg');
				addPuntoPc();
			}
			else if(manoJugador === 'piedra'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/piedra-circle.svg');
				addPuntosJugador();
			}
			setTimeout(()=>{
				opacityOff();
				manoPcDOM.setAttribute('src','./assets/black-white-mano.png');
				manoUserDOM.setAttribute('src','./assets/black-white-mano.png');
			},1500)
			break;
		case 1:
			//manoPc = 'piedra';
			manoPcDOM.setAttribute('src','./assets/piedra-circle.svg');
			if(manoJugador === 'tijeras'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/tijera-circle.svg');
				addPuntoPc();
			}
			else if(manoJugador === 'papel'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/papel-circle.svg');
				addPuntosJugador();
			}
			else if(manoJugador === 'piedra'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/piedra-circle.svg');
			}
			setTimeout(()=>{
				opacityOff();
				manoPcDOM.setAttribute('src','./assets/black-white-mano.png');
				manoUserDOM.setAttribute('src','./assets/black-white-mano.png');
			},1500)
			break;
		case 2:
			//manoPc = 'papel';
			manoPcDOM.setAttribute('src','./assets/papel-circle.svg');
			if(manoJugador === 'tijeras'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/tijera-circle.svg');
				addPuntosJugador();
			}
			else if(manoJugador === 'papel'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/papel-circle.svg');
			}
			else if(manoJugador === 'piedra'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/piedra-circle.svg');
				addPuntoPc();
			}
			setTimeout(()=>{
				opacityOff();
				manoPcDOM.setAttribute('src','./assets/black-white-mano.png');
				manoUserDOM.setAttribute('src','./assets/black-white-mano.png');
			},1500)
			break;
	}
}
const nivelDificil = (manoJugador) =>{
	randomNumber =  Math.floor(Math.random()*3);
	rondas += 1;
	numeroAdivinador = Math.floor(Math.random()*2);
	counter_rondas.textContent = `rondas: ${rondas}`;
	switch (randomNumber) {
		case 0:
			// manoPc = tijera
			if(manoJugador === 'tijeras'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/tijera-circle.svg');
				if(numeroAdivinador === 1){
					manoPcDOM.setAttribute('src','./assets/piedra-circle.svg');
					addPuntoPc();
				}else{
					manoPcDOM.setAttribute('src','./assets/tijera-circle.svg');
				}
			}
			else if(manoJugador === 'papel'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/papel-circle.svg');
				manoPcDOM.setAttribute('src','./assets/tijera-circle.svg');
				addPuntoPc();
			}
			else if(manoJugador === 'piedra'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/piedra-circle.svg');
				if(numeroAdivinador === 1){
					manoPcDOM.setAttribute('src','./assets/papel-circle.svg');
					addPuntoPc();
				}else{
					manoPcDOM.setAttribute('src','./assets/tijera-circle.svg');
					addPuntosJugador();
				}
			}
			setTimeout(()=>{
				opacityOff();
				manoPcDOM.setAttribute('src','./assets/black-white-mano.png');
				manoUserDOM.setAttribute('src','./assets/black-white-mano.png');
			},1500)
			break;
		case 1:
			//manoPc = 'piedra';
			if(manoJugador === 'tijeras'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/tijera-circle.svg');
				manoPcDOM.setAttribute('src','./assets/piedra-circle.svg');
				addPuntoPc();
			}
			else if(manoJugador === 'papel'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/papel-circle.svg');
				if(numeroAdivinador === 1){
					manoPcDOM.setAttribute('src','./assets/tijera-circle.svg');
					addPuntoPc();
				}else{
					manoPcDOM.setAttribute('src','./assets/piedra-circle.svg');
					addPuntosJugador();
				}
			}
			else if(manoJugador === 'piedra'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/piedra-circle.svg');
				if(numeroAdivinador === 1){
					manoPcDOM.setAttribute('src','./assets/papel-circle.svg');
					addPuntoPc();
				}else{
					manoPcDOM.setAttribute('src','./assets/piedra-circle.svg');
				}
			}
			setTimeout(()=>{
				opacityOff();
				manoPcDOM.setAttribute('src','./assets/black-white-mano.png');
				manoUserDOM.setAttribute('src','./assets/black-white-mano.png');
			},1500)
			break;
		case 2:
			//manoPc = 'papel';
			if(manoJugador === 'tijeras'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/tijera-circle.svg');
				if(numeroAdivinador === 1){
					manoPcDOM.setAttribute('src','./assets/pidra-circle.svg');
					addPuntoPc();
				}else{
					manoPcDOM.setAttribute('src','./assets/papel-circle.svg');
					addPuntosJugador();
				}
			}
			else if(manoJugador === 'papel'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/papel-circle.svg');
				if(numeroAdivinador === 1){
					manoPcDOM.setAttribute('src','./assets/tijera-circle.svg');
					addPuntoPc();
				}else{
					manoPcDOM.setAttribute('src','./assets/papel-circle.svg');
				}
			}
			else if(manoJugador === 'piedra'){
				opacityFull();
				manoUserDOM.setAttribute('src','./assets/piedra-circle.svg');
				manoPcDOM.setAttribute('src','./assets/papel-circle.svg');
				addPuntoPc();
			}
			setTimeout(()=>{
				opacityOff();
				manoPcDOM.setAttribute('src','./assets/black-white-mano.png');
				manoUserDOM.setAttribute('src','./assets/black-white-mano.png');
			},1500)
			break;
	}
}

start_button.addEventListener('click',()=>{
	h1.style.display = 'none';
	modal.style.display = 'none';
	document.body.classList.remove('home');
	containerGame.style.display = 'flex';
})

function opacityFull(){
	manoPcDOM.style.opacity = '1';
	manoUserDOM.style.opacity = '1';
}
function opacityOff(){
	manoPcDOM.style.opacity = '0.5';
	manoUserDOM.style.opacity = '0.5';
}

function addPuntosJugador(){
	rondaUser += 1;
	for(let i = 0; i < rondaUser; i++){
		puntajeUser[i].classList.add('points-on');
		if(puntajeUser[i].classList.contains('fin') === true){
			alert('ganaste');
			reiniciarJuego();
		}
	}
}

function addPuntoPc(){
	rondaPc += 1;
	for(let i = 0; i < rondaPc; i++){
		puntajePc[i].classList.add('points-on');
		if(puntajeUser[i].classList.contains('fin') === true){
			alert('perdiste');
			reiniciarJuego();
		}
	}
}

manos.forEach(element => {
	element.addEventListener('click',()=>{
		let url = element.getAttribute('src');
		if(niveles_button.selectedIndex == 0){
			nivelesGame.textContent = 'nivel: facil';
			if(url === './assets/papel-circle.svg') nivelFacil('papel');
			else if(url === './assets/piedra-circle.svg') nivelFacil('piedra');
			else if(url === './assets/tijera-circle.svg') nivelFacil('tijeras');
		}else{
			nivelesGame.textContent = 'nivel: dificil';
			if(url === './assets/papel-circle.svg') nivelDificil('papel');
			else if(url === './assets/piedra-circle.svg') nivelDificil('piedra');
			else if(url === './assets/tijera-circle.svg') nivelDificil('tijeras');
		}
	})
});

function reiniciarJuego(){
	opacityOff();
	manoPcDOM.setAttribute('src','./assets/black-white-mano.png');
	manoUserDOM.setAttribute('src','./assets/black-white-mano.png');
	rondas = 0;
	rondaUser = 0;
	rondaPc = 0;
	for(let i = 0; i < 4; i++){
		puntajeUser[i].classList.remove('points-on');
	}
	for(let i = 0; i < 4; i++){
		puntajePc[i].classList.remove('points-on');
	}
	counter_rondas.textContent = `rondas: ${rondas}`;
}

boton_reiniciar.addEventListener('click',()=>reiniciarJuego())
