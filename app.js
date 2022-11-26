(function () {

    let scree = document.querySelector('.scree');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            scree.value += value;
        }); 
       
    });

    

    equal.addEventListener('click', function(e){
        if (scree.value === '') {
            scree.value = "Please enter";
        } else {
            let answer = eval(scree.value);
            scree.value = answer;
        }
    })


    clear.addEventListener('click', function(e) {
        scree.value = "";
    })


})();