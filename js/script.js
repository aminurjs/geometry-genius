
function getInput(id){
    const inputBox = document.getElementById(id);
    const inputText = inputBox.value;
    const input = parseFloat(inputText);
    return input;
}
function setText(id, set){
    const text= document.getElementById(id);
    text.innerText = set;
}


document.getElementById('triangle-btn').addEventListener('click', function(){
    const baseInput = getInput('triangle-base');
    const heightInput = getInput('triangle-height');

    const area = 0.5 * baseInput * heightInput;
    if(isNaN(area)){
        alert('Please type a number');
        return;
    }
    setText('triangle-area', area);
    areaCalculator('Triangle', area);
})
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const baseInput = getInput('rectangle-width');
    const heightInput = getInput('rectangle-length');

    const area = baseInput * heightInput;
    if(isNaN(area)){
        alert('Please type a number');
        return;
    }
    setText('rectangle-area', area);
    areaCalculator('Rectangle', area);
})
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const baseInput = getInput('parallelogram-width');
    const heightInput = getInput('parallelogram-height');

    const area = baseInput * heightInput;
    if(isNaN(area)){
        alert('Please type a number');
        return;
    }
    setText('parallelogram-area', area);

    areaCalculator('Parallelogram', area);
})


function areaCalculator(areaType, area){
    const calculationArea = document.getElementById('area-calculator');
    const count = calculationArea.childElementCount;
    const p = document.createElement('p');
    p.classList.add('py-3');
    p.innerHTML = `${count + 1}. ${areaType} <span id="element${count}">${area}</span> cm<sup>2</sup> <button class="btn btn-secondary btn-sm ml-2" onclick="clicked(${count})"> Convert m<sup>2</sup></button> <br> <span class="ml-5 my-2 font-medium block" id="set-${count}"></span>`;

    calculationArea.appendChild(p);
}

function clicked(num){
    const text = document.getElementById('element' + num);
    const textString = text.innerText;
    const number = parseFloat(textString);
    const mitre = number / 100;

    const set = document.getElementById('set-' + num);
    set.innerHTML = `Element area :  ${mitre} m<sup>2</sup>`;
}
