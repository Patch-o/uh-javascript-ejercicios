const userAnswers = [];

function confirmExample(description){  ///declaras la/s variable/s en una funcion x //CONFIRM: sub-ventanita rollo +18 CON INPUT

    return confirm(description);
}

function promptExample(description){      ///declaras la/s variable/s en una funcion y //PROMPT: sub-ventanita texto
    return prompt(description);
}

function father(description,callback){       ///CALLBACK con las variables declaradas, añades la var CB
    userAnswers.push(callback(description));

}
father('cuantos anhos tienes?',promptExample);
father('holas',confirmExample);
console.log(userAnswers);