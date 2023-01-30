const obj = {}
async function a(obj){
    const continentsSet = new Set()

    let response = await fetch('https://restcountries.com/v3.1/all')
    let data = await response.json()
    await data.forEach(element => continentsSet.add(element.region));
    await Array.from(continentsSet).map(item => obj[item] = [])
    await data.forEach(element =>  obj[element.region].push(element.name.common))

    console.log(obj)
}

a(obj)
console.log(obj)

const initialState = {
    countries : obj
}
// initialState.countries.map((item) => console.log(item))


export default initialState