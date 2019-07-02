const local = {
    api_shop: "http://127.0.0.1:3333"
}
const prod = {
    api_shop: "http://127.0.0.1:3333"
}

let enpointConfig = local;
if(process.env === "production") {
    enpointConfig = prod
}

if(process.env === "develop") {
    enpointConfig = prod
}

export default enpointConfig;