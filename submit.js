var users = [];

//forma constructor
var User = function (name, exp, area, email, phone) {
    this.Nombre = name;
    this.Expediente = exp;
    this.Area = area;
    this.Correo = email;
    this.Telefono = phone;
    this.Accion = "";
}

var formData  = document.getElementById('submit_data');

//función submit
formData.addEventListener('click', function(event){
    event.preventDefault();

    var validValue = 0;
    var name = document.getElementById("name");  
    var exp = document.getElementById("exp");    
    var area = document.getElementById("area");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    
    if(valid(name) === 1){ validValue = 1;} 
    if(valid(exp) === 1 ){ validValue = 1;}
    if(valid(area) === 1){ validValue = 1;}
    if(valid(email) === 1){validValue = 1;}
    if(valid(phone) === 1){validValue = 1;}

    if(validValue === 0){
        var count = 0;
        addUser(name.value, exp.value, area.value, email.value, phone.value);
    }
    
});

//forma impura
function addUser(name, exp, area, email, phone){
    
    var newUser = new User(name, exp, area, email, phone);
    users.push(newUser);
    document.getElementById("form-user").reset();
    //console.log(users);
    //console.log(document.querySelector("table"));

    var table = document.querySelector("table");

    if (table == null) {
        users.forEach(function(item){
            addToTable(item);
        })
    }
    
   
    newTable(newUser);
}    

var addToTable = function(array){
       
    var field = Object.keys(users[0]);

    var table = document.createElement("table");
    table.style.border = "1px solid #a42145";
    table.style.width = "100%";
    document.getElementById("table-users").appendChild(table);
    //console.log("table: ", table);

    var thead = document.createElement("thead");
    var headrow = document.createElement("tr");
    //console.log("headrow[0]", headrow);
    //console.log("field: ", field );

    for (var i = 0; i < field.length; i++) {
        var headcell = document.createElement("th");
        headcell.style = "text-align: center";
        headcell.style.border = "2px solid #a42145";
        var textcell = document.createTextNode(field[i]);
        headcell.appendChild(textcell);
        headrow.appendChild(headcell);
    }

    thead.appendChild(headrow);
    table.appendChild(thead);
    tbody = document.createElement("tbody");
    table.appendChild(tbody);
}

var newTable = function(users){


   
    
    var  newField = Object.keys(users);
    //console.log(newField);

    tbody = document.querySelector("tbody");
    tr = document.createElement("tr");
    tr.style.border = "2px solid #a42145";
    tbody.appendChild(tr);

    console.log(users);
    for (const key in newField) {

       // console.log(key);
        
       //
       var otherField = newField[key];
       //console.log(users[otherField]);

        var td = document.createElement("td");
        td.style = "font-size: 14px";
        td.style.border = "2px solid #a42145";
        
     /*   if(users[5]){

        };*/
       
        if(key == 5  ){
            var btnDelete = document.createElement("button");
            btnDelete.innerText = "Borrar";
            td.appendChild(btnDelete);
            btnDelete.addEventListener("click",function(){
                
            })
        }else{
            var text = document.createTextNode(users[otherField]);
            td.appendChild(text);
        }
        

       
        tr.appendChild(td);
        

    }
  
}
var deleteRow = function(idRow){
    users.splice(idRow,1);
}
//función para validar
var valid = function(inputText){
    if(inputText.value.length === 0){
        inputText.style = "border: 2px solid red";
        return 1;
    }
    else{
        inputText.style = "border: 1px solid #bebebe";
        return 0;
    }
}
