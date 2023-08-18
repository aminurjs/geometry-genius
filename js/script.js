
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
    p.innerHTML = `${count + 1}. ${areaType} <span id="element${count}">${area}</span><span id="mcm${count}" class="font-medium"> cm<sup>2</sup></span>  <button id="convert-btn-${count}" class="btn btn-secondary btn-sm ml-2 mt-2" onclick="clicked(${count})"> Convert <span id="btn-${count}">m</span><sup>2</sup></button>`;
    calculationArea.appendChild(p);
}

function clicked(num){
    const btn = document.getElementById('btn-' + num)
    const text = document.getElementById('element' + num);
    const textString = text.innerText;
    const number = parseFloat(textString);
    const set = document.getElementById('mcm' + num);
    if (btn.innerText !== 'M'){
        const mitre = number * 100;
        text.innerText = mitre;
        btn.innerText = 'm';
        set.innerHTML = ` cm<sup>2</sup>`;
    }
    else if(btn.innerText === 'M'){   
        const mitre = number / 100;
        text.innerText = mitre;
        btn.innerText = 'cm';
        set.innerHTML = ` m<sup>2</sup>`;
    }
}
