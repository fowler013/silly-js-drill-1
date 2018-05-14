document.addEventListener('DOMContentLoaded', function(){
 let friends = ['brian', 'ted', 'tyler', 'mike', 'clint',];
 let h3 = document.createElement('h3');
 let p = document.createElement('p');
 //create button
let button = document.createElement('button');
let btnText = document.createTextNode('Sing!');

document.body.appendChild(button);
button.appendChild(btnText);


button.addEventListener('click', function(){
    for( i = 0; i < friends.length; i++){
        let friend =friends[i];
        {
        for(j=99; j >0; j--){
            if(j>2){
                console.log(j + " lines of code in the file," + j + "lines of code;" + friend +" " + "strikes one out, clears it all out" + (j-1) + " " + "line of code in the file");
            }else if (j==2){
                console.log(j + " lines of code in the file," + j + "lines  of code;"+ friend + " " + "strikes one out, clears it all out" + (j-1) + " " +"lines of code in the file");
            }else{
                console.log( j + " lines of codes in the file," + j + "lines of code;" + friend + " " + "strikes one out, clears it all out, no more lines of code in the file.");
            }
        }
    }
};
 
});  
 
});

   
