let url = 'https://catfact.ninja/fact';

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        console.log('Error = ', err);
        return 'No fact found';
    }
}

let btn = document.querySelector('button');
let p = document.querySelector('#fact');

btn.addEventListener('click', async () => {
    let fact = await getFacts();
    console.log(fact);
    p.innerHTML = `<b> ${fact} </b>`;
});
