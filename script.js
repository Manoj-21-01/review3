function display(){
    var name = document.querySelector('.name').value;
    var html = `<div class="box">
        <span>${name}</span>
                </div>`
    var div = document.createElement('div');
    div.innerHTML = html;
    document.getElementById('main').appendChild(div);
}
