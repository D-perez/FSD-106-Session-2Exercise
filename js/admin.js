let items=[];


class Item{
    constructor(code,title,price,description,category,image){
        this.code=code;
        this.title=title;
        this.price=price;
        this.description=description;
        this.category=category;
        this.image=image;
    }
}

function clearForm(){
    $('#code').val('');
    $('#title').val('');
    $('#price').val('');
    $('#description').val('');
    $('#category').val('');
    $('#image').val('');
}
function register(){
    //save input value in variables
    var code = $('#code').val();
    var title = $('#title').val();
    var price = $('#price').val();
    var description = $('#description').val();
    var category = $('#category').val();
    var image = $('#image').val();
    //create obj using constructor

    var newItem = new Item(code,title,price,description,category,image);
    //push to array
    items.push(newItem);
    //display in array
    console.log(newItem);
    // console.log(Item);
    clearForm()

}
function init(){
    console.log('good');
    $('#btn-register').on('click',function(){
        register();
    });
}



window.onload=init;