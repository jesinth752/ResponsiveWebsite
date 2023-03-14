
let Rindex=-1
let Lindex=1;

const view=(val)=>
{

    document.getElementById('lightboxview').style.display='flex';
    document .getElementById('frame').src=val.src;
    
}
const closebox=(val)=>
{
  
    document.getElementById('lightboxview').style.display='none';

}

const next=()=>
{   Rindex++;
    let imagearray=document.getElementsByClassName("images");
    document .getElementById('frame').src=imagearray[Rindex].src;
    if(Rindex>=imagearray.length-1)
    {
        Rindex=-1;
    }
   
}
const prev=()=>
{   Lindex--;
    let imagearray=document.getElementsByClassName("images");
    document .getElementById('frame').src=imagearray[Lindex].src;
    if(Lindex<=0)
    {
        Lindex=imagearray.length;
    }
   
}
