function home(){
    document.getElementById("homes").style.color="rgb(20,251,20)"
    document.getElementById("plans").style.color="white"
    document.getElementById("programs").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("contacts").style.color="white"
}

function program(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="white"
    document.getElementById("programs").style.color="rgb(20,251,20)"
    document.getElementById("blogs").style.color="white"
    document.getElementById("contacts").style.color="white"
}

function plan(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="rgb(20,251,20)"
    document.getElementById("programs").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("contacts").style.color="white"
}

function blog(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="white"
    document.getElementById("programs").style.color="white"
    document.getElementById("blogs").style.color="rgb(20,251,20)"
    document.getElementById("contacts").style.color="white"
}

function contact(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="white"
    document.getElementById("programs").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("contacts").style.color="rgb(20,251,20)"
}

function submit(){
  let name = document.getElementById("name")
  let number = document.getElementById("number")

  if(name.value=="")
  {
    alert("Please enter name")
  }
  else if(number.value=="")
  {
    alert("Plead enter number")
  }else{
    alert("thanks for Join " + name.value)
  }
}

