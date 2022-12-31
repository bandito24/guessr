const thinking = document.getElementById('thinking')

function disappear() {
    setTimeout(() =>{
    thinking.style.display = 'none'
    document.getElementById('button').style.display = 'flex'
}, 5000)
}

disappear()


function appear() {
    document.getElementById('button2').style.display = 'none'
    // document.getElementById('button').display = 'none'
    setTimeout(() =>{
        document.getElementById('fuck-you-page').style.display = 'block'
    }, 200)
}

document.getElementById('button2').addEventListener('click', appear)