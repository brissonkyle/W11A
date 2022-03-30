function hoverMe(event) {
    hover.style.color='#f44ff4';
    console.log(event);
}

function clickMe(event) {
    click.style.backgroundColor='maroon';
    console.log(event);
}

function spaceAppend(event) {
    let space = event.key;
    space = document.getElementById('spaceMe').innerText += 'You pressed Space';
    console.log(event);
}

document.body.addEventListener('keypress', spaceAppend);

let click = document.getElementById('clickClass');
click.addEventListener('click', clickMe);

let hover = document.getElementById('hoverClass');
hover.addEventListener('mouseover', hoverMe);