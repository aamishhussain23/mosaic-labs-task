let tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(tab => tab.classList.remove('active'))
        this.classList.add('active')
    })
})

let executeButton = document.querySelector('button')

let entryNumber = 4

executeButton.addEventListener('click', function() {
    let newEntry = document.createElement('div')
    newEntry.className = 'entry'
    newEntry.innerHTML = `
        <p><span>${entryNumber}</span>Lorem ipsum dolor sit ame consectetur.Lorem ipsum dolor sit ame consectetur.</p>
        <img class="loading" style="background-color: black; border-radius: 50%; padding: 6px;" src="assets/loading.png" alt="Loading Icon">
    `

    let queryHistory = document.querySelector('#queryHistory')
    queryHistory.insertBefore(newEntry, queryHistory.firstChild)

    setTimeout(function() {
        newEntry.querySelector('img').src = 'assets/tick.png'
        newEntry.querySelector('img').classList.remove('loading')
        newEntry.querySelector('img').style.backgroundColor = '#DCDCDC'  
    }, 10000)

    entryNumber++
})
