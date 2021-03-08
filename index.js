//Calling the input by Id
let myForm = document.getElementById("myForm");
let CardNumber = document.getElementById("CardNumber");//CardNumber : xxxxxxxxx;
let CardCVC = document.getElementById("CardCVC");
let Amount = document.getElementById("amount");
let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let City = document.getElementById("inputCity");
let State = document.getElementById("inputState");
let PostalCode = document.getElementById("inputZip");
let Messages = document.getElementById("Messages");

myForm.addEventListener('submit', e => {//evitar el submit
	e.preventDefault();
	checkInputs();//comprobar los inputs
});

function checkInputs(){
    //Numbers
    const CardNumberValue =  CardNumber.value;
    const CardCVCValue = CardCVC.value;//000
    const AmountValue = Amount.value;
    const PostalCodeValue = PostalCode.value;
    //Strings
    const FirstNameValue = FirstName.value;
    const LastNameValue = LastName.value;
    const CityValue = City.value;
    const StateValue = State.value;
    const MessagesValue = Messages.value;



    if(CardNumberValue==""){
        empty(CardNumber);
    }else{
        Full();
    };

    
    if(CardNumberValue.length!=17){
        shouldNum(17,"Card Number");
        
    }
    else{
        Full();
    };

    if(CardCVCValue==""){
        empty(CardCVC);
    }
    else{
        Full();
    };

    if(CardCVCValue.length!=3){
        shouldNum(3,"CVC Number"); 
    }
    else{
        Full();
    };

    if(AmountValue==""){
        empty(Amount); 
    }
    else{
        Full();
    };
    
    if(Amount==0){
        NotCero();
    }
    else{
        Full();
    };
 
    
    
        
    
};
//input lo voy a ocupar para el fondo alert
function empty(input){
    document.getElementById("Warning").innerHTML=`<div class="col-12">
                                    <div class="alert alert-danger" role="alert">
                                        <strong>Some fields are missing</strong>
                                    </div>
                                     </div>`;
   input.css()
    
    
};



function shouldNum(len, name){
 document.getElementById("Warning").innerHTML=`<div class="col-12">
                                    <div class="alert alert-danger" role="alert">
                                        <strong>The ${name} should have ${len} digits </strong>
                                    </div>
                                     </div>`;
};

function Full(){
    document.getElementById("Warning").innerHTML=" "

};
function NotCero (){
    document.getElementById("Warning").innerHTML=`<div class="col-12">
                                    <div class="alert alert-danger" role="alert">
                                        <strong>The Amount should be different than cero</strong>
                                    </div>
                                     </div>`;
};