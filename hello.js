function fun(n)
{
    let num = 2;
    let arr = [];
    while(arr.length<n)
    {
        let isprime=true;
        for(let i=0;i<arr.length;i++)
        {
            if(num%arr[i]===0)
            {
                isprime=false;
                break;
            }
        } 
            if(isprime)
                {
                    arr.push(num)
                }
        num++;
    }
    console.log(arr)
}
fun(5);