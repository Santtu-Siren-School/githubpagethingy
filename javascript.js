document.getElementById("submit").addEventListener("click", function() {
    feedback();
    console.log("clicked")
});
function feedback() {
    const feedback=document.getElementById("feedback");
    let output="";
    console.log("function")
    let q1=document.getElementById('soul').value.trim().toLowerCase();
    let q2=document.getElementById('money').value.trim().toLowerCase();
    let q3=document.getElementById('car').value.trim().toLowerCase();
    let q4=document.getElementById('house').value.trim().toLowerCase();
    if(q1==="yes"&&q2==="yes"&&q3==="yes"&&q4==="yes") {
        const p = document.createElement("p");
        p.textContent = "Thank you :3 UwU";
        feedback.appendChild(p);
    }
    else {
        const p = document.createElement("p");
        p.textContent = "you should burn in the deepest pits of hell for thousend years for your crimes";
        feedback.appendChild(p);
    }
}