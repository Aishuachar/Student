function calculateLove(){
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();
    if (name1 == "" || name2 == "" ){
        alter ("please enter both names!");
        return;
    }
    let loveScore=Math.floor(Math.random()*100);
    let resultText=`${name1} And ${name2}: ${loveScore} % Love Math`
    let resultDiv=document.getElementById("result");
    resultDiv.innerHTML=resultText;    
}