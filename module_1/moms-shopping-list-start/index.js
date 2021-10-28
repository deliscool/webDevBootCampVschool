const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    //assign new elements 
    const newLi = document.createElement("li");
    const newDiv = document.createElement("div");

    //Takes value from label id:'title' and creates item in a listed div
    newDiv.textContent = title.value;
    form.title.value = "";

    //Creates new div and list item
    const shopList = document.getElementById("list");
    newLi.append(newDiv);
    shopList.append(newLi);

    //creates edit button
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    newLi.append(editButton);

    // Creates delete button
    const dButton = document.createElement('button');
    dButton.textContent = "X";
    newLi.append(dButton);
    

    //eventlistener for delete button to delete list item
    dButton.addEventListener("click", function () {
        newLi.remove();
    })

    //event listener to edit created list item 
    editButton.addEventListener("click", function () {
        newLi.textContent = ("Nope");
    })
})