
// const url = "https://api.npoint.io/f603ee295d45913acb6f"


// class Goods{
//     constructor(){
//         this.goods =[];
//     }

//     async fetchGoods(){
//         const response = await fetch (`${url}`);
//         const catalog = await response.json();
//         this.goods = catalog;
//     }
// }



// const init= async()=>{
// const list = new Goods;
// await list.fetchGoods();


// };
const url = "https://api.npoint.io/f603ee295d45913acb6f"

class ItemGood{
    constructor(id, title, price, img,){
        this.id = id,
        this.title = title,
        this.price = price,
        this.img = img 
    }

    itemRender(){
        return `<div  id="${this.id}">
                    <img src="img/${this.img}">
                    <h2>${this.title}</h2>
                    <h2>${this.price}</h2>
                </div>`
    }
}

class Goods{
    constructor(){
        this.goods = []
    }
    async fetchGoods(){
        
        const response = await fetch(url);
        const catalog = await response.json();
        this.goods = catalog;
    }

    render(){
            let listHTML = "";
            this.goods.forEach((item)=>{
            const itemGood = new ItemGood(item.id, item.title, item.price, item.img);
            listHTML += itemGood.itemRender();
        })

        document.querySelector(".list").innerHTML = listHTML;



    }

}

const init= async()=>{
const list = new Goods;
await list.fetchGoods();
list.render();

const basket = [];
document.querySelectorAll('.item').forEach(elem =>{
    
    elem.addEventListener('click', function(){
        let id_prod = this.id;
        let basket_item = list.goods.find(i =>i.id==id_prod)
        basket.push(basket_item);
        console.log(basket)
    })
})

};

window.onload = init