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

myForm.addEventListener('submit', e => {
    e.preventDefault();//evitar el submit
    // console.log(FirstName.id);
    checkInputs();//comprobar los inputs

});

function checkInputs() {
    //Numbers
    const CardNumberValue = CardNumber.value;
    const CardCVCValue = CardCVC.value;//000
    const AmountValue = Amount.value;
    const PostalCodeValue = PostalCode.value;
    //Strings
    const FirstNameValue = FirstName.value;
    const LastNameValue = LastName.value;
    const CityValue = City.value;
    const StateValue = State.value;
    const MessagesValue = Messages.value;

    if (CardNumberValue == '' || CardCVCValue == '' || AmountValue == '' || PostalCodeValue == '' || FirstNameValue == '' || LastNameValue == '' || CityValue == '' || StateValue == 'Pick a State' || MessagesValue == '') {
        empty();

    } else {
        Full();
    };

    //Numbers validation
    if (CardNumberValue.length != 17 || CardNumberValue == '') {
        InputError(CardNumber, 'Card Number should have 17 digits');
    } else {
        InputSuccess(CardNumber);
    };

    if (CardCVCValue.length != 3 || CardCVCValue == '') {
        InputError(CardCVC, 'Card CVC should have 3 digits');
    } else {
        InputSuccess(CardCVC);
    };

    if (AmountValue.length == 0 || AmountValue == '') {
        InputError(Amount, 'Amount should be more than 0');
    } else {
        InputSuccess(Amount);
    };

    if (PostalCodeValue.length != 5 || PostalCodeValue == '') {
        InputError(PostalCode, 'Postal Code should have 5 digits');
    } else {
        InputSuccess(PostalCode);
    };

    //strings validation
    if (FirstNameValue == '') {
        InputError(FirstName, 'Insert a valid name');
    } else {
        InputSuccess(FirstName);
    };

    if (LastNameValue == '') {
        InputError(LastName, 'Insert a valid lastname');
    } else {
        InputSuccess(LastName);
    };

    if (CityValue == '') {
        InputError(City, 'Insert a valid City');
    } else {
        InputSuccess(City);
    };

    if (StateValue == 'Pick a State') {
        InputError(State, 'Insert a valid State');
    } else {
        InputSuccess(State);
    };

    if (MessagesValue == '') {
        InputError(Messages, 'Please write a message');
    } else {
        InputSuccess(Messages);
    };






};

//input lo voy a ocupar para el fondo alert
function empty() {
    document.getElementById("Warning").innerHTML = `<div class="col-12">
                                    <div class="alert alert-danger" role="alert">
                                        <strong>Some fields are missing</strong>
                                    </div>
                                     </div>`;
};

function Full() {
    document.getElementById("Warning").innerHTML = " "
};


function InputError(input, msg) {

    input.style.background = "#f8d7da";
    const div = input.parentElement;
    //para evitar que se dupliquen los mensajes
    let small = div.querySelector("small");
    if (small.innerHTML =! '') { small.innerHTML = '' };
    small.innerHTML=`${msg}`


};
function InputSuccess(input) {
    input.style.background = "white"
    const div = input.parentElement;
    let small = div.querySelector("small");
    small.innerHTML = '' 

};



