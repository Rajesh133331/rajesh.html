let count=0;
let res=null;
let m = {}
export function fun(arr)
{
    for(let x of arr)
    {
        m[x]=(m[x] || 0)+1;
        if(m[x]>count)
        {
            count=m[x];
            res=x;
        }
        

    }
    

    console.log(res);
    console.log(count)

}