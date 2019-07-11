function checksuccesper(){

   var name = document.getElementById('name').value;
  var lname = document.getElementById('lname').value;

   if(name == ""){
   alert('Vul aub de velden in ');
  }else if (name.length <=1 ) {
   alert('Getal boven de 9 AUB !')
  }

   else if(lname == ""){
   alert('Vul aub de velden in ');
  }else if (lname.length <=3 ) {
   alert('Gebruikersnaam moet uit 4 tekens bestaan')
  }

  else{
  var succesdata = Math.random() * 100;
  succesdata = Math.floor(succesdata);
  document.getElementById('succesvalue').value = succesdata + "%"; 
  }
  
 }

