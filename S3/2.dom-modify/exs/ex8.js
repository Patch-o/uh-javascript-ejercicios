//'Voy en medio!' en una p entre divs

const text$$ = document.createElement('p')
text$$.textContent = 'Voy en medio!'

const bef$$ = document.querySelectorAll('div')[1];

document.body.insertBefore(text$$, bef$$)