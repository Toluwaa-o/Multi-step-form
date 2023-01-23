let buttons = document.querySelectorAll("button");
let steps = document.querySelectorAll(".step");
let back = document.querySelectorAll(".back-button");
let inputField = document.querySelectorAll(".input-field")
let errorMessage = document.querySelectorAll(".error");
let digits = document.querySelectorAll(".num");
let cards = document.querySelectorAll(".card");
let optional = document.querySelectorAll(".optional");
let cardPrice = document.querySelectorAll(".card-price");
let toggle = document.querySelector(".toggle-shape");
let monthText = document.getElementById("month")
let yearText = document.getElementById("year")
let checkBox = document.querySelectorAll(".checkbox");
let addOnPrices = document.querySelectorAll(".add-ons")
let tiles = document.querySelectorAll(".tile");
let totalText = document.getElementById("total")
let planSelected = document.getElementById("plan-selected")
let backToStep1 = document.getElementById("link-to-step-1");
let priceOfSel = document.getElementById("planSel-price")
let totalLabel = document.getElementById("totalText")
let appendDiv = document.querySelector(".rest")
let total = 0;
let addons = 0
let totalP = 0;

buttons[0].addEventListener("click", function(){
    for(let i = 0; i < inputField.length; i++){
        if(inputField[i].value === ""){
            errorMessage[i].style.display = "flex"
            inputField[i].style.border = "1px solid hsl(354, 84%, 57%)"
            setTimeout(function(){
                errorMessage[i].style.display = "none"
                inputField[i].style.border = "1px solid hsl(229, 24%, 87%)"
            }, 3000)
        }else if(inputField[0].value !== "" && inputField[1].value !== "" && inputField[2].value !== "") {
            steps[0].style.display = "none"
            steps[1].style.display = "unset"
            digits[1].style.backgroundColor = "hsl(206, 94%, 87%)";
            digits[1].style.color = "black";
            digits[1].style.border = "1px solid hsl(206, 94%, 87%)";
            digits[0].style.backgroundColor = "transparent";
            digits[0].style.color = "white";
            digits[0].style.border = "1px solid white";
        }
    }
})

buttons[1].addEventListener("click", function(){
    if(cards[0].classList.contains('clicked') || cards[1].classList.contains('clicked') || cards[2].classList.contains('clicked')){
        if(cards[0].classList.contains('clicked')){
            if(toggle.style.justifyContent === "flex-end"){
                total = 9;
                planSelected.textContent = "Arcade(Monthly)"
                priceOfSel.textContent = "$9/mo"
            }else {
                total = 90;
                planSelected.textContent = "Arcade(Yearly)"
                priceOfSel.textContent = "$90/yr"
            }
        }else if (cards[1].classList.contains('clicked')){
            if(toggle.style.justifyContent === "flex-end"){
                total = 12;
                planSelected.textContent = "Advanced(Monthly)"
                priceOfSel.textContent = "$12/mo"
            }else {
                total = 120;
                planSelected.textContent = "Advanced(Yearly)"
                priceOfSel.textContent = "$120/yr"
            }
        }else if(cards[2].classList.contains('clicked')){
            if(toggle.style.justifyContent === "flex-end"){
                total = 15;
            planSelected.textContent = "Pro(Monthly)"
            priceOfSel.textContent = "$15/mo"
            }else {
            total = 150;
            planSelected.textContent = "Pro(Yearly)"
            priceOfSel.textContent = "$150/yr"
    }
        }
        steps[1].style.display = "none"
        steps[2].style.display = "unset"
        digits[2].style.backgroundColor = "hsl(206, 94%, 87%)";
        digits[2].style.color = "black";
        digits[2].style.border = "1px solid hsl(206, 94%, 87%)";
        digits[1].style.backgroundColor = "transparent";
        digits[1].style.color = "white";
        digits[1].style.border = "1px solid white";
    }
})

buttons[2].addEventListener("click", function(){
        steps[2].style.display = "none"
        steps[3].style.display = "unset"
        digits[3].style.backgroundColor = "hsl(206, 94%, 87%)";
        digits[3].style.color = "black";
        digits[3].style.border = "1px solid hsl(206, 94%, 87%)";
        digits[2].style.backgroundColor = "transparent";
        digits[2].style.color = "white";
        digits[2].style.border = "1px solid white";
        if(checkBox[0].checked){
            if(toggle.style.justifyContent === "flex-end"){
                addons +=1;
                    appendDiv.innerHTML += `<div>
                                                <p>Online service</p>
                                                <p>+$1/mo</p>
                                            </div>`
                }else {
                    addons += 10;
                    appendDiv.innerHTML += `<div>
                                                <p>Online service</p>
                                                <p>+$10/yr</p>
                                            </div>`
                };
            }

        if(checkBox[1].checked){
            if(toggle.style.justifyContent === "flex-end"){
                addons +=2;
                appendDiv.innerHTML += `<div>
                <p>Large storage</p>
                <p>+$2/mo</p>
            </div>`
            }else {
                addons += 20;
                appendDiv.innerHTML += `<div>
                <p>Large storage</p>
                <p>+$20/yr</p>
            </div>`
            };
        };
        
        if(checkBox[2].checked){
            if(toggle.style.justifyContent === "flex-end"){
                addons +=2;
                appendDiv.innerHTML += `<div>
                <p>Customizable profile</p>
                <p>+$2/mo</p>
            </div>`
            }else {
                addons += 20;
                appendDiv.innerHTML += `<div>
                <p>Customizable profile</p>
                <p>+$20/yr</p>
            </div>`
            };
        };

        if(toggle.style.justifyContent === "flex-end"){
            totalP = total + addons;
            totalText.textContent = `$ ${totalP}/mo`
        }else {
            totalP = total + addons;
            totalText.textContent = `$${totalP}/yr`
        };
})

buttons[3].addEventListener("click", function(){
        steps[3].style.display = "none"
        steps[4].style.display = "flex"
})

back[0].addEventListener("click", function(){
    steps[1].style.display = "none"
    steps[0].style.display = "unset"
    digits[0].style.backgroundColor = "hsl(206, 94%, 87%)";
    digits[0].style.color = "black";
    digits[0].style.border = "1px solid hsl(206, 94%, 87%)";
    digits[1].style.backgroundColor = "transparent";
    digits[1].style.color = "white";
    digits[1].style.border = "1px solid white";
})

backToStep1.addEventListener("click", function(){
    steps[3].style.display = "none"
    steps[0].style.display = "unset"
    digits[0].style.backgroundColor = "hsl(206, 94%, 87%)";
    digits[0].style.color = "black";
    digits[0].style.border = "1px solid hsl(206, 94%, 87%)";
    digits[3].style.backgroundColor = "transparent";
    digits[3].style.color = "white";
    digits[3].style.border = "1px solid white";
    addons = 0;
    total = 0;
    appendDiv = ""
})

back[1].addEventListener("click", function(){
    steps[2].style.display = "none"
    steps[1].style.display = "unset"
    digits[1].style.backgroundColor = "hsl(206, 94%, 87%)";
    digits[1].style.color = "black";
    digits[1].style.border = "1px solid hsl(206, 94%, 87%)";
    digits[2].style.backgroundColor = "transparent";
    digits[2].style.color = "white";
    digits[2].style.border = "1px solid white";
    total = 0
})

back[2].addEventListener("click", function(){
    steps[3].style.display = "none"
    steps[2].style.display = "unset"
    digits[2].style.backgroundColor = "hsl(206, 94%, 87%)";
    digits[2].style.color = "black";
    digits[2].style.border = "1px solid hsl(206, 94%, 87%)";
    digits[3].style.backgroundColor = "transparent";
    digits[3].style.color = "white";
    digits[3].style.border = "1px solid white";
    appendDiv.innerHTML = ""
    addons = 0;
    totalP = 0;
})

cards[0].addEventListener("click", function(){
    cards[0].classList.add('clicked');
    cards[1].classList.remove('clicked');
    cards[2].classList.remove('clicked');
})

cards[1].addEventListener("click", function(){
    cards[1].classList.add('clicked');
    cards[0].classList.remove('clicked');
    cards[2].classList.remove('clicked');
})

cards[2].addEventListener("click", function(){
    cards[2].classList.add('clicked');
    cards[1].classList.remove('clicked');
    cards[0].classList.remove('clicked');
})

toggle.addEventListener("click", function(){
    toggle.style.justifyContent = toggle.style.justifyContent === "flex-start" ? "flex-end" : "flex-start";
    if(toggle.style.justifyContent === "flex-end"){
        optional[0].style.visibility = "hidden"
        optional[1].style.visibility = "hidden"
        optional[2].style.visibility = "hidden"
        monthText.style.color = "hsl(213, 96%, 18%)"
        yearText.style.color = "hsl(231, 11%, 63%)"
        addOnPrices[0].textContent = "+$1/mo";
        addOnPrices[1].textContent = "+$2/mo"
        addOnPrices[2].textContent = "+$2/mo"
        cardPrice[0].textContent = "$9/mo"
        cardPrice[1].textContent = "$12/mo"
        cardPrice[2].textContent = "$15/mo"
        totalLabel.textContent = "Total(per month)"
    }else {
        optional[0].style.visibility = "visible";
        optional[1].style.visibility = "visible"
        optional[2].style.visibility = "visible"
        yearText.style.color = "hsl(213, 96%, 18%)"
        monthText.style.color = "hsl(231, 11%, 63%)"
        addOnPrices[0].textContent = "+$10/yr";
        addOnPrices[1].textContent = "+$20/yr"
        addOnPrices[2].textContent = "+$20/yr"
        cardPrice[0].textContent = "$90/yr"
        cardPrice[1].textContent = "$120/yr"
        cardPrice[2].textContent = "$150/yr"
        totalLabel.textContent = "Total(per year)"
    }
})

if(checkBox[0].checked){
    tiles[0].classList.add('tile-bg');
}else {
    tiles[0].classList.remove('tile-bg');
};

if(checkBox[1].checked){
    tiles[1].classList.add('tile-bg');
}else {
    tiles[1].classList.remove('tile-bg');
};

if(checkBox[2].checked){
    tiles[2].classList.add('tile-bg');
}else {
    tiles[2].classList.remove('tile-bg');
};
