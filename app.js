function addNewProjField(){
    // create new node
    let newNode = document.createElement('textarea')
    newNode.classList.add('mt-3')
    newNode.classList.add('form-control')
    newNode.classList.add('projField')
    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder', 'Enter here')

    let projOb = document.getElementById('proj')
    let projAddButtonOb = document.getElementById('projAddButton')

    // insert (newNode) inside (projOb) but before (projAddButton)
    projOb.insertBefore(newNode, projAddButtonOb)
    
}

function addNewCertiField(){
    // create new node
    let newNode = document.createElement('textarea')
    newNode.classList.add('mt-3')
    newNode.classList.add('form-control')
    newNode.classList.add('certiField')
    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder', 'Enter here')

    let certiOb = document.getElementById('certi')
    let certiAddButton = document.getElementById('certiAddButton')

    // insert (newNode) inside (certiOb) but before (certiAddButton)
    certiOb.insertBefore(newNode, certiAddButton)

}

// generating CV
function generateCV(){
    // console.log('generated');

    // name field to name template
    let nameField = document.getElementById('nameField').value // name field has value now
    // 1
    let nameT1 = document.getElementById('nameT1')
    nameT1.innerHTML = nameField
    
    // 2
    let nameT2 = document.getElementById('nameT2').innerHTML = nameField

    // contact, address, email field to its template
    let contactField  = document.getElementById('contactField').value
    let conatctT = document.getElementById('contactT').innerHTML = contactField

    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value

    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value
    
    // links field to links template

    document.getElementById('gitT').innerHTML = document.getElementById('gitField').value
    document.getElementById('portT').innerHTML = document.getElementById('portField').value
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value
  
    // project
    let pjs = document.getElementsByClassName('projField')
    let str = '' 
    for(let e of pjs){
        str = str + `<li> ${e.value} </li>`// add all fields inside <li></li> to a string
    }
    document.getElementById('projT').innerHTML = str


    // certifications
    let cer = document.getElementsByClassName('certiField')
    let str1 = ''
    for(let e of cer){
        str1 = str1 + `<li> ${e.value} </li>`
    }
    document.getElementById('certiT').innerHTML = str1


    // code for setting image
    let file = document.getElementById('imgField').files[0] //0th positon file (1st file)
    console.log(file);

    let reader = new FileReader() // to read the data
    reader.readAsDataURL(file) // reader has data now

    console.log(reader.result);

    // set image in Template
    reader.onloadend = function(){ // call after image loads
        // document.getElementById('imageT').src= reader.result
        // or
        document.getElementById('imageT').setAttribute('src', reader.result)
    }

    
    // after generating, hide CV-form and display cv-template
    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display = 'inline-block'
    
}

// printing CV
function printCV(){
    window.print()
}