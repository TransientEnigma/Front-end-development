  "use strict";
  // ******************** CART FEATURE *************************************//
  // an event listener on the add button to get add the text typed by user
  addToCartButton.addEventListener('click', ev => {
    // need to clear otherwise it adds on top of it
    clearListChildElements();
    // get the chosen products
    const chosenProducts = document.querySelectorAll('#softwareOffered input[type="checkbox"]:checked');
    chosenProducts.forEach(element => {
      // create a new list item element
      const listItem = document.createElement('li');
      // create a new label items
      const labelForInput = document.createElement('label');
      // create a new input element for checkbox
      const inputCheckboxElement = document.createElement('input');
      // add text to the label
      labelForInput.textContent = `${element.ariaLabel}`;
      // set the input element to be of type checkbox
      inputCheckboxElement.type = "checkbox";
      // checked will be checked or unchecked depending on checkboxInput
      //inputCheckboxElement.checked = "none";
      // set the id of the input element = number (length) of items in array + 1
      inputCheckboxElement.id = `${element.attributes.id.value}`;
      inputCheckboxElement.ariaLabel = `${element.attributes.id.value}`;
      // set the label property equal to the inputElement id value
      // labelForInput.htmlFor = inputCheckboxElement.id;
      // append the input to the item element  as a child element
      listItem.appendChild(inputCheckboxElement);
      // append the label to the item element as a child element
      listItem.appendChild(labelForInput);
      // append the item to the list given by id="selectedSoftware"
      softwareCart.appendChild(listItem);
      // create a new button element
      const removeButton = document.createElement('button');
      // call the button "x"
      removeButton.textContent = "x";
      // add event listener on to button that removes listItem when clicked
      removeButton.addEventListener('click', ev => {
        // deselect the checked item in the software offered list
        const listCollectionItems = document.querySelectorAll('#softwareOffered li');
        listCollectionItems.forEach(listCollectionItem => {
          // if innerText is the same for the list items
          if (listCollectionItem.lastElementChild.id == listItem.firstElementChild.id) {
            //need to check the class is there - will error if it has already been removed
            //if (listCollectionItem.previousElementSibling.classList.contains("selectedItem")){
            // remove the class selectedItem
            listCollectionItem.firstElementChild.classList.remove("selectedItem");
            // also uncheck the checkbos
            listCollectionItem.lastElementChild.checked = false;
            // will remove the item if clicked
            listItem.remove();
            //}
          }
        });
        // update the storage when software is removed
        storeDataLocally();
      });
      listItem.appendChild(removeButton);
      storeDataLocally();
    });
  });

  function clearListChildElements() {
    // code that loops through (keeps removing firstchild element)
    // while there is a firstchild element in selectedSoftware, it removes it
    while (softwareCart.firstChild) {
      softwareCart.removeChild(softwareCart.firstChild);
    }
    storeDataLocally();
  }
  clearButton.addEventListener('click', ev => {
    clearListChildElements();
    // need to clear the local storage
    localStorage.clear();
    // need to clear the checked items
    const checkboxCollection = document.querySelectorAll('#softwareOffered input[type="checkbox"]');
    checkboxCollection.forEach(checkbox => {
      if (checkbox.checked) {
        checkbox.checked = false;
        checkbox.previousElementSibling.classList.remove("selectedItem");
      }
    });
  });
  // ********************** only selects the checked items ***********************
  // ********************** Clears the storage *********************************
  function storeDataLocally() {
    localStorage.clear();
    // if there is software product in the cart
    if (document.querySelectorAll('#softwareCart input[type="checkbox"]')) {
      // get all the software in the cart
      const chosenProducts = document.querySelectorAll('#softwareCart input[type="checkbox"]');
      // create an array to store the products
      let selectedProducts = new Array();
      // loop through the chosen (checked products)
      chosenProducts.forEach(element => {
        // map array to get array of [key, value] for each iteration of selectedSoftware
        // we want to store the data of marked products in the
        const chosenProductData = {
          chosenProduct: `${element.attributes.id.value}`,
          ProductLabel: `${element.ariaLabel}`
        }
        selectedProducts.push(chosenProductData);
        // where the selectedSoftware.id makes it the id for the memory storage
        // (selectedSoftware.id comes from id of ul)
        let result = localStorage.setItem(softwareCart.id, JSON.stringify(selectedProducts));
        // console.log(JSON.stringify(selectedProducts));
        // console.log(result);
      });
    }
  }
  // ************ when you click on an item the text wbecomes highlighted *************
  softwareOffered.addEventListener('click', (ev) => {
    const checkboxCollection = document.querySelectorAll('#softwareOffered input[type="checkbox"]');
    checkboxCollection.forEach(checkbox => {
      if (checkbox.checked) {
        checkbox.previousElementSibling.classList.add("selectedItem");
      } else {
        checkbox.previousElementSibling.classList.remove("selectedItem");
      }
    });
  });
