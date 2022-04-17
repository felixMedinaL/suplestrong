const products = [
    {id: 1, name:'Isotope', price:54990, description:'Proteina Isolatada 25grs', img:'https://www.ubuy.hu/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF5OStFcms3RkwuX0FDX1NMMTUwMF8uanBn.jpg',stock: 30, category:'Proteina'},
    {id: 2, name:'Carnivor Mass', price:79990, description:'Ganador de peso 15Lbs', img:'https://http2.mlstatic.com/D_NQ_NP_815147-MLC48883703947_012022-V.jpg',stock: 15, category:'weight gainer'},
    {id: 3, name:'Amino Stim', price:22990, description:'Aminoacidos 30serv.', img:'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw1388f048/images/imagenes-productos/800/MKU8/MKU8749HBS-001.jpg?sw=320&sh=409&sm=fit',stock: 17, category:'Aminoacidos'},
    {id: 4, name:'Stimul 8', price:24990, description:'Pre entreno 35serv', img:'https://onenutrition.cl/tienda/2097/stimul-8-30-servicios-35servicios.jpg',stock: 12, category:'Pre entreno'},
    {id: 5, name:'Lipo 6 Black', price:32990, description:'Quemador de grasa 60cap', img:'https://m.media-amazon.com/images/I/81ZN0GZQbSL._AC_SL1500_.jpg',stock: 20, category:'Quemador de grasa'},
    {id: 6, name:'Cell Tech', price:27990, description:'Creatina 3Libras', img:'https://dojiw2m9tvv09.cloudfront.net/26533/product/new-cell-tech5721.jpg',stock: 10, category:'Creatina'}

]


export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}