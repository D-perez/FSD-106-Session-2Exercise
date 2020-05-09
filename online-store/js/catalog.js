
let items=[
    {
        code:'123',
        title:'Samsung TV',
        price:400,
        description:'4k tv 55inch',
        category:'electronics',
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hfzJlnI8w-Shj8xkVuBppQHaEK%26pid%3DApi&f=1'
    },
    {       
        code:'743',
        title:'bose',
        price:100,
        description:'loud speakers',
        category:'audio',
        image:'http://i.ebayimg.com/images/i/390969456673-0-1/s-l1000.jpg'
    },
    {        
        code:'999',
        title:'phone',
        price:1000,
        description:'samsung',
        category:'phone',
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.p4DrMtp1WRtULaGVxEFcNQHaDt%26pid%3DApi&f=1'
    }
];

function displayItems(){
    //travel inside array for loop
    for (let i = 0; i < items.length; i++) {

    //create template string
    var layout = `
    <div id='item${i}'>
    <h3>${items[i].title} $${items[i].price}</h3>
    <img class='item-img' src='${items[i].image}'>
    </div>
    <p><b>${items[i].category}</b> ${items[i].description} </p>
    <br>
    `;
    //display on layout on dom
    $('#catalog').append(layout)
    }
}

function init(){
    console.log('good')
    displayItems()
}

window.onload=init;

