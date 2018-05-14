document.addEventListener('DOMContentLoaded', function () {
    let friends = ['brian', 'ted', 'tyler', 'mike', 'clint',];
    let button = document.createElement('button');
        let btnText = document.createTextNode('Sing!');
let board = document.createElement('div')
        //
//h3.appendChild(h3Text)
        // box.className = 'friend'
        button.appendChild(btnText);
        document.body.appendChild(button);
        //document.appendChild(board)
    button.addEventListener('click', function () {
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        //create button
       
        
        function Sing() { 
            
            for (i = 0; i < friends.length; i++) {
            let friend = friends[i]
            let p = document.createElement('p')
            let box = document.createElement('div');
            let names = document.createElement('h3');
            let nameText = document.createTextNode(friend);
            names.appendChild(nameText);
            document.body.appendChild(names);
            box.className = 'friend';
            document.body.appendChild(box);
                for (j = 99; j > 0; j--) {
                if (j > 2) {
                        let song1 = document.createTextNode(j + " lines of code in the file," + j + "lines of code;" + friend + " " + "strikes one out, clears it all out" + (j - 1) + " " + "line of code in the file");
                        p.appendChild(song1);
                    } else if (j == 2) {
                        let song2 = document.createTextNode(j + " lines of code in the file," + j + "lines  of code;" + friend + " " + "strikes one out, clears it all out" + (j - 1) + " " + "lines of code in the file");
                        p.appendChild(song2);
                    } else {
                        let song3 = document.createTextNode(j + " lines of codes in the file," + j + "lines of code;" + friend + " " + "strikes one out, clears it all out, no more lines of code in the file.");
                        p.appendChild(song3);
                    }
                    box.appendChild(p);
                }
            }
            //h3.appendChild(friends);
            document.body.appendChild(p);
        }; Sing()

    });

});


