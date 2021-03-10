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
    console.log(FirstName.id);
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
    
    if(CardNumberValue==''||CardCVCValue==''||AmountValue==''||PostalCodeValue==''||FirstNameValue==''||LastNameValue==''||CityValue==''||StateValue=='Pick a State'||MessagesValue==''){
        empty();
        
    }else{
        Full();
    };

   if(CardNumberValue.length != 17||CardNumberValue=='') {
		InputError(CardNumber, 'Card Number should have 17 digits');
	} else {
		InputSuccess(CardNumber);
	}
	
    
    
    
        
    
};
//input lo voy a ocupar para el fondo alert
function empty(){
    document.getElementById("Warning").innerHTML=`<div class="col-12">
                                    <div class="alert alert-danger" role="alert">
                                        <strong>Some fields are missing</strong>
                                    </div>
                                     </div>`;
};

function Full(){
    document.getElementById("Warning").innerHTML=" "
};


function InputError(input, msg){
    input.style.background="#f8d7da";
    const div = input.parentElement;
    let littlemsg=document.createElement('small');
    littlemsg.innerHTML=`<>${msg}<>`;
    div.appendChild(littlemsg);
    
};
function InputSuccess(input){
    input.style.background="white"
    const div = input.parentElement;
    let small=div.querySelector("small");
    small.innerText="";

};

