/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    let currentMaxInd=0;
    let arr=[];
    let tempStr='';
    for(let i=0;i<s.length;i++){
        let charVal=s.charAt(i); 
        tempStr+=charVal;
        let lastCurChar=s.lastIndexOf(charVal);

        if(i && i===currentMaxInd){
            arr.push(tempStr.length);
            tempStr='';
            currentMaxInd=0;
            lastCurChar=0;
            continue;
        }
        if(lastCurChar===i && currentMaxInd===0){
            arr.push(tempStr.length);
            tempStr='';
            currentMaxInd=0;
            lastCurChar=0
             continue;
        }
        if(lastCurChar> currentMaxInd){
            currentMaxInd=lastCurChar;
        }
    }
return arr;
};