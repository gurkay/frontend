function getCountries() {
    return fetch('http://localhost:3000/demo/data/countries.json').then(res => res.json()).then(d => d.data);
}

export {getCountries};