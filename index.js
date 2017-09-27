window.onload = function () {
    var contactList = [];
    if (localStorage.getItem('list') != undefined) {
        contactList = JSON.parse(localStorage.getItem('list'));
        out();
    }
    document.getElementById('sub').onsubmit = function () {
        var name = document.getElementById('name').value;
        var surname = document.getElementById('surname').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('number').value;
        contactList.push({
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            check: false
        });
        console.log(contactList);
        out();
        localStorage.setItem('list', JSON.stringify(contactList));

    }


    function out () {
        var out='';
        for (var key in contactList) {
            if (contactList[key].check == true){
                out += '<input type ="checkbox" checked>';
            }
            else {
                out += '<input type="checkbox">';
            }
            out += contactList[key].name + '<br>';
        }
        document.getElementById('out').innerHTML = out;

    }
}
