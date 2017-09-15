function addGlow(checkId,checkmain) {
  console.log(checkId);
  // console.log("\'" + checkId.toString() + "\'");
  // document.getElementById("\'" + checkId.toString() + "\'").checked = true;
  // console.log('Checked');
  if(checkmain[0].checked == true){
    for(var i =0; i< checkId.length; i++){
      checkId[i].checked = true;
      checkmain[i].checked = true;
    }
  }
  // } checkId[0].checked = true;
  else {
    // for(var i =0; i< checkId.length; i++){
    //   checkId[i].checked = false;
    //   checkmain[i].checked = false;
    // }
    checkId[0].checked = false;
  }
}
