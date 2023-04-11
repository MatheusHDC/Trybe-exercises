document.querySelectorAll('#header-container')[0].style.backgroundColor = 'rgb(0, 176, 105)';
const emergencyTask = document.querySelectorAll('.emergency-tasks')[0];
emergencyTask.style.backgroundColor = 'rgb(255, 159, 132)';
const emergencyTakHeader = document.querySelectorAll('.emergency-tasks h3');

for(let index = 0; index < emergencyTakHeader.length; index+=1){
    emergencyTakHeader[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTask = document.querySelectorAll('.no-emergency-tasks')[0];
noEmergencyTask.style.backgroundColor = 'rgb(249, 219, 94)';
const noEmergencyTakHeader = document.querySelectorAll('.no-emergency-tasks h3');

for(let index = 0; index < noEmergencyTakHeader.length; index+=1){
    noEmergencyTakHeader[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

document.querySelectorAll('#footer-container')[0].style.backgroundColor = 'rgb(0, 53, 1)';