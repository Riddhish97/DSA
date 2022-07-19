function test(arr) {
    let N = arr.length;
    let i = Math.floor(N / 2);
    let j = i + 1;
    let isLeft = true,isLoopBreak=false;
    while (i >= 0 || j < N) {
        if(isLoopBreak){
            console.log("I", i+1, "j", j)
            console.log("[i]", arr[i+1], "arr[j]", arr[j]) 
            isLoopBreak=false;
        }
        console.log("I", i, "j", j)
        console.log("[i]", arr[i], "arr[j]", arr[j]) 
        if (i == 0 && j == N - 1) {
            break;
        }
        if (isLeft) {
            if (i) {
                i--;
            }
            if (j != N - 1) {
                isLeft = false;
            }
        } else {
            if (j != N - 1) {
                j++;
                isLoopBreak=true;
            }
            if (i) {
                isLeft = true;
            }
        }
    }
}
console.log(test([1, 2, 2, 6, 9, 4,7]));