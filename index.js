(function (window) {

    'use strict';

    var contactList = [];

    window.editCheckedLine = editCheckedLine;
    document.getElementById('sub').onsubmit = sumElementSubmit;

    if (localStorage.getItem('list')) {
        contactList = JSON.parse(localStorage.getItem('list'));
        out();
    }


    function sumElementSubmit () {
        var name = document.getElementById('name').value,
            surname = document.getElementById('surname').value,
            email = document.getElementById('email').value,
            phone = document.getElementById('number').value;

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

    function editCheckedLine() {
        alert('Im work!');
    }

    function out () {
        var out='';
        for (var key in contactList) {
            if (contactList[key].check){
                out += '<input type ="checkbox" name ="' + key + '" checked>';
            }
            else {
                out += '<input type="checkbox" name =\"' + key + '\">';
            }
            out += contactList[key].name + '<br>';
        }
        document.getElementById('out').innerHTML = out;

    }

})(window);
