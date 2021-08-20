let products = new Proxy([
    { name: 'Firefox', type: 'browser' },
    { name: 'SeaMonkey', type: 'browser' },
    { name: 'Thunderbird', type: 'mailer' }
],{
    get(target, prop){
        if(prop in target){
            return target[prop]
        }
        if(prop === 'number'){
            return target.length
        }

        let result, types = {}
        for (let product of target){
            if(product.name === prop){
                result = product
            }
            if (types[product.type]) {
                types[product.type].push(product);
            } else {
                types[product.type] = [product];
            }
        }
        if(result) return result
        if (prop in types) {
            return types[prop];
        }
    }
})

console.log(products[0]); // {name: "Firefox", type: "browser"}
console.log(products['Firefox']); // {name: "Firefox", type: "browser"}
console.log(products.browser);
// 0: {name: "Firefox", type: "browser"}
// 1: {name: "SeaMonkey", type: "browser"}
console.log(products.mailer); // 0: {name: "Thunderbird", type: "mailer"}
console.log(products.number); // 3
