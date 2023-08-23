function getForm() {
    // console.log(card.length)
    
    let cardname = document.getElementById('nameinput').value;
    let card = document.getElementById('numberinput').value;
    let month = document.getElementById('monthinput').value;
    let year = document.getElementById('yearinput').value;
    let cvv = document.getElementById('cvvinput').value;
     
    if (cardname == '') {
        alert('Name must be filled out ');
    }
    else if(card == '' || card.length < 16) {
        alert('Invalid card number')
    } else if (month == '' || month > 12) {
        alert("come on bro there are only 12 Months");
    } else if (year == '' || year > 45) {
        alert('Year should be less than 2045')
    } else if (cvv == '' || cvv.length < 3) {
        alert('Invalid CVV Number')
    } else {
    document.getElementById('nameoutput').innerText = cardname;
    document.getElementById('numberoutput').innerText = card.replace(/\d{4}(?=.)/g, '$& ');
    document.getElementById('cvvoutput').innerText = cvv;
    document.getElementById('expiryoutput').innerText=`${month}/${year}`
    }
    
    
    console.log(cardname,card,month,year,cvv)
    
    
};


    

