module.exports = function check(str, bracketsConfig) {
      if(str.length%2!=0){
        return false;
    }
    let arr=str.split('');
    let stack=[];
    for(let j=0;j<arr.length; j++){
        for(let i=0; i<bracketsConfig.length;i++){
            if(stack[stack.length-1]==bracketsConfig[i][0]&&arr[j]==bracketsConfig[i][1]){
                stack.pop();
            }else{
                if(arr[j]==bracketsConfig[i][0]){
                    stack.push(arr[j]);
                }
            }
        }

    }
    return stack.length==0;
}
