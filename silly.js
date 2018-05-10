//this is the array I will loop
var friends = ['brian','ted','tyler','mike','clint',]

// the song
function sing(){
    for( i = 0; i < friends.length; i++){
        for(j=99; j >0; j--){
            if(j>2){
                console.log(j + " lines of code in the file," + j + "lines of code;" + friends[i] +" " + "strikes one out, clears it all out" + (j-1) +"line of code in the file");
            }else if (j==2){
                console.log(j + " lines of code in the file," + j + "lines  of code;"+ friends[i] + " " + "strikes one out, clears it all out" + (j-1) +"lines of code in the file");
            }else{
                console.log( j + " lines of codes in the file," + j + "lines of code;" + friends[i] + " " + "strikes one out, clears it all out, no more lines of code in the file.");
            }
        }
    }
};
sing();    
