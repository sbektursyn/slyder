let leftZ = 0;  //смещение от левого края
const slyderLine = document.querySelector('.lenta');

document.querySelector('.slyder-next').addEventListener('click', function(){
	leftZ = leftZ + 400;
	if (leftZ > 1200){
		leftZ = 0;
	}
	slyderLine.style.left = -leftZ + 'px'
});

document.querySelector('.slyder-back').addEventListener('click', function(){
	leftZ = leftZ - 400;
	if (leftZ < 0){
		leftZ = 1200;
	}
	slyderLine.style.left = -leftZ + 'px'
});









