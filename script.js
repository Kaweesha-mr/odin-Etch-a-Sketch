
function ask() {

    let n = prompt("Enter a number between 1 and 100");
    if (n < 1 || n > 100) {
        alert("Please enter a number between 1 and 100");
        ask();
    }
    else {
        const container = document.getElementsByClassName('container')[0];

        container.innerHTML = '';
        container.style.setProperty('--grid-rows', n);
        container.style.setProperty('--grid-cols', n);
        
        for (let i = 0; i < (n * n); i++) {
        
            const divs = document.createElement('div');
            divs.classList.add('divs');
            divs.style.cssText = 'width: 25px;height: 25px;border: 1px solid black;';
            container.appendChild(divs);
        }
        const divs = document.querySelectorAll('div.divs');
        
        divs.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            });
        });

    }
}


//create grid
const n = 16;
const container = document.getElementsByClassName('container')[0];
container.style.setProperty('--grid-rows', n);
container.style.setProperty('--grid-cols', n);

for (let i = 0; i < (n * n); i++) {

    const divs = document.createElement('div');
    divs.classList.add('divs');
    container.appendChild(divs);
}
const divs = document.querySelectorAll('div.divs');

divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    });
});