const arr = [4,2,5,2,5,1];
for(let i=0;i<arr.length;i++)
{
    let mid_ind = i;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[j]<arr[mid_ind])
        {
            mid_ind = j;
        }
    }
        if(mid_ind !==i)
        {
            let temp = arr[i]
            arr[i] = arr[mid_ind]
            arr[mid_ind] = temp;
        }
    }
console.log(arr)