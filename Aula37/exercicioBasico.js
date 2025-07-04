function twoNubers (x,y){
   switch (x,y) { 
      case 1:
        x > y 
        return console.log(x)
      case 2:
        y > x
        return console.log(y)
       
   }
}
twoNubers(1,2)
//versao professor 
function max (x,y){
    if (x>y)return x;
    return y
   //ou return x > y ? x : y
}
console.log(max(10,40))

const max2 = (z,a) =>{return z > a ? z : a;}
console.log(max2(10,20));