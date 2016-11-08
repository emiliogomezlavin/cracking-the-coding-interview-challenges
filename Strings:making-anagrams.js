function main() {
    var a = readLine();
    var b = readLine();
    
    
    //  Para crear un anagrama necesito tener las mismas letras pero en diferente orden, por lo tanto, si remuevo las       //  letras que no estan en el otro sting.
    
    //  Checo cada letra de un string vs el otro string para asegurar que estan todas las mismas letras y luego checo       //  cuales estan repetidas para asegurar que sean el mismo numero de repeticiones
    
    //  checks first string elements
    

    // my answer that worked on some test cases
    var arrayA = a.split("");
    var arrayB = b.split("");
    // var deleteCount = 0;
    // var count = arrayA.length + arrayB.length;
    // arrayA.sort();
    // arrayB.sort();
    
    
    // input:  a = c,d,e   b = a,b,c
    
    
    // checks each letter of stringA to see if exists in stringB
    // for (var i = 0; i<arrayA.length; i++){
    //    if (!binarySearch(arrayB, arrayA[i])){
    //        deleteCount ++;
    //    }
    // }
    
    // checks each letter of stringB to see if exists in stringA
    // for (var j = 0; j<arrayB.length; j++){
    //    if (!binarySearch(arrayA, arrayB[j])){
    //        deleteCount ++;
    //     }
    // }
    
    // console.log(deleteCount);
    


    //  BEST Solution from HackerRank

    //  input:  a = s,f,s,t,k   b = s,l,o,e,s,a,t   
    //  output: 3(repeated)  5 + 7 = 12 (count original)  result = 12 - 3*2 = 6 (to be deleted)
    
    //  Este approach se base en encontrar cuales son las letras que se repiten en los dos, luego multiplicas por dos porque para que se cubran el length de las dos string y restas el total que habia originalmente menos las que quedan y eso te da las que debes eliminar
    
    var countA = arrayA.length;
    var countB = arrayB.length;
    var count = countA + countB;
    var pair = 0;
    for(var i = 0; i < countA;i++){
        for(var j = 0; j < countB; j++){
            if(arrayA[i] == arrayB[j]){
                arrayB.splice(j,1);
                pair++;
                break;
            }
        }
    }
    console.log(count - (pair*2));
    
}


//  helper function for my solution
function binarySearch (array, element){
    var min = 0;
    var max = array.length - 1;
    var mid;

    while(min <= max) {
        mid = Math.floor((max + min) / 2);

        if (array[mid] === element) {
            return true;
        }
        else if (array[mid] < element) {
            min = mid + 1;
        }
        else {
            max = mid - 1;
        }
    }

    return false;
}
