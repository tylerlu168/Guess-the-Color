const rgb = document.querySelector('.rgb');
const tiles = document.querySelectorAll('.tile');
const score = document.querySelector('.score');
let i;

reset();

function reset()
{
    for(let i = 0; i < tiles.length; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        tiles[i].style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    i = Math.floor(Math.random() * tiles.length);
    rgb.innerText = tiles[i].style.backgroundColor;
}

for(let tile of tiles) {
    tile.addEventListener('click', event => {
        if(tile.style.backgroundColor == tiles[i].style.backgroundColor)
        {
            score.innerText = Number(score.innerText) + 1;
        }
        reset();
    })
}