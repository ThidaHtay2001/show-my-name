export const myName="Ada Heko";
export const showMyName=()=>{
    return myName;
}

export const showMyNameUI=()=>{
    const h1=document.createElement("h1");
    h1.innerText=myName;
    document.body.prepend(h1);
   
}

// console.log(showMyName());
// showMyNameUI();
