

console.log("que pajo")
let costo_por_licencia = 120;
let amount,amountWithoutTax,amountWithTax,tax,
service,tip=0;
let currency,clientTransactionId,storeId,
reference,phoneNumber,email,documentId;
document.getElementById("cantidad_licencias").innerHTML;
document.getElementById("cantidad_licencias").innerHTML=3;

let token ="QtCNleLgCbSxdEt2l0i-sXbNuafhTuGQmshyaDHdobAR-dpDUUeinTnusF7B5gVeO5Dol-aiJ6RV9HkMoLwlGzrx9TyOjP39uz7ib3Lg8E4MlDr8SNW7FZNPToAo8_mLZGwWAhJL7iBIX1NAgc-8MdQTqydp7ndxf0zud3lbPtlGh6Mcs-oQyzvO1xoL_Jleb89PKoLV5BAIOcvPZg3ixxsNUV0yeGa2P2FKMjuUD21F99P2tGiTKNA3nqZhZcV-Nryhqzcj11viqIIEF58TFDtWsSWw2RWt7W5xDW2L_Ix8zzuMrPiQ-wyhe8lAR8dAw8Vb_g";

function add(){
  document.getElementById("cantidad_licencias").innerHTML++;
}
function substract(){
  if(document.getElementById("cantidad_licencias").innerHTML>3)
    document.getElementById("cantidad_licencias").innerHTML--;
}
function valorpayphone(num1) {
  let resultado = num1 * 100;
  return resultado;
}
function pagar(){
  var parametros = {
    
    amount : valorpayphone(costo_por_licencia),
    amountWithoutTax :  valorpayphone(costo_por_licencia),
    clientTransactionID: "Prueba001",
    responseUrl : "https://desarrollotimospro.github.io/Pasarela-Payphone/",
    cansellacionUrl : "https://desarrollotimospro.github.io/Pasarela-Payphone/"
  };
  if (true){
    console.log("hi");
    amount = valorpayphone(costo_por_licencia*document.getElementById("cantidad_licencias").innerHTML);
    amountWithoutTax =  valorpayphone(costo_por_licencia*document.getElementById("cantidad_licencias").innerHTML);
    currency= "USD";
    clientTransactionId= "pruebasgddfh001";
  }
  var Parametros = {
    amount:amount,
    amountWithoutTax:amountWithoutTax,
    amountWithTax:amountWithTax,
    tax:tax,
    service:service,
    tip:tip,
    currency:currency,
    clientTransactionId:clientTransactionId,
    storeId:storeId,
    reference:reference,
    phoneNumber:phoneNumber,
    email:email,
    documentId:documentId
  };
  
}


window.onload = function() {
payphone.Button({

//token obtenido desde la consola de developer
token: token,

//PARÁMETROS DE CONFIGURACIÓN
btnHorizontal: true,
btnCard: true,

createOrder: function(actions){

//Se ingresan los datos de la transaccion ej. monto, impuestos, etc
return actions.prepare({

amount: amount,
amountWithoutTax: amountWithoutTax,
currency: currency,
clientTransactionId: clientTransactionId
});

},
onComplete: function(model, actions){

//Se confirma el pago realizado
actions.confirm({
id: model.id,
clientTxId: model.clientTxId
}).then(function(value){

//EN ESTA SECCIÓN SE RECIBE LA RESPUESTA Y SE MUESTRA AL USUARIO

if (value.transactionStatus == "Approved"){
alert("Pago " + value.transactionId + " recibido, estado " + value.transactionStatus );
}
}).catch(function(err){
console.log(err);
});

}
}).render("#pp-button");

}
