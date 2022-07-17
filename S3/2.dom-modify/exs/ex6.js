const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; 
// crear lista ul>li y meter attr en array
const ul$$ = document.createElement ('ul');

for (let i = 0; i < apps.length; i++) {
    const app = apps[i];
    const li$$ = document.createElement('li');
    li$$.textContent = app;
}


 
 
 document.body.appendChild(ul$$)