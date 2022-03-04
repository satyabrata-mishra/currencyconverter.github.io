const select= document.querySelectorAll(".currency");

fetch("https://api.frankfurter.app/currencies")
.then((data)=>data.json())
.then((data)=>{
    display(data);
});

function display(data){
    const entries= Object.entries(data);
    for(var i=0;i<entries.length;i++){
        select[0].innerHTML += `<option class="currency" value="${entries[i][0]}">${entries[i]}</option>`;
        select[1].innerHTML += `<option class="optcls" value="${entries[i][0]}">${entries[i]}</option>`;
    }
}
function answer(){
    let currency1=select[0].value;
    let currency2=select[1].value;
    let value=document.getElementById("num").value;
    if(value.length==0 || parseInt(value)===0 ){
        document.getElementById("ans").value="0";
    }
    else{
        if (currency1!=currency2){
            convert(currency1,currency2,value);
        }
        else{
            alert("Choose Different Currency");
        }
    }
}
function convert(currency1,currency2,value){
    fetch(`https://api.frankfurter.app/latest?amount=${value}&from=${currency1}&to=${currency2}`)
    .then((val)=>val.json())
    .then((val)=>{
        // console.log(Object.values(val.rates)[0]);
        document.getElementById("ans").value=Object.values(val.rates)[0];
    })
}