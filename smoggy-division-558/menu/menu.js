    //Mine one
// console.log(document.querySelector('#number1'))
window.setTimeout(()=>{
    document.querySelector('#loader').classList.add('active');
},1800)

///Product adding category
let ImagedataOfhot = ['https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000240.jpg?ver=23.07','https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000078.jpg?ver=23.07','https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000169.jpg?ver=23.07','https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000155.jpg?ver=23.07']

let titledataOfhot = ['The Allu Arjun Combo','5+5 Bucket Offer','Peri Peri 10 Leg piece + 4 dips','Mega Feast'];

let PricedataOfhot = ['399.05','619.05','868.57','635.24'];

let descdataOfhot = ['Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip','Save 15% on special combo of 5pc Hot & Crispy Chicken + 5 Peri Peri Strips','Save 22% on this Leg Piece Bucket with 10 KFC Peri Peri Leg Piece with 4 dips','Relish a big size feast with KFC favorites & new launches- 2 pc H&C,2 pc Smoky Grilled, 1 buttered bun, 1gravy, med.fries & pepsi']

function showData (titledataOfhot){
    for(let i=0;i<titledataOfhot;i++){
        let div = document.createElement('div');
        let image = document.createElement('img');
        image.setAttribute('src',ImagedataOfhot[i]);
        let title = document.createElement('h3');
        title.innerText = titledataOfhot[i];
        let price = document.createElement('p');
        price.innerText = PricedataOfhot[i];
        let desc  = document.createElement('p');
        desc.innerText = descdataOfhot[i];
        let cartButton = document.createElement('button');
        cartButton.innerText = 'Add to cart';
        div.append(image,title,price,desc,cartButton);
        document.querySelector('#HotDeals').append(div);
    }
}
showData(titledataOfhot);