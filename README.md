# CTEC3905 Assignment

# The Idea
The purpose of this website was that I would be able to show case some of my academic achievements and skills to potential employers. The slide show of projects is not the extensive list of projects but it allowed me to demonstrate some of my web-design skills. My limited graphics design ability allowed me to create a simple website with implemented CSS design features and my coding skills enabled me create complex code that added the functionality I was looking for. This course content and material has been excellent in enabling me to learn the skills required to create complex webpages using javaScript, CSS and HTML.

# Notes
The `shop.html` page was implemented as a basic shopping cart. A person can add items to the cart and delete them from the cart. The idea was that each item would have a price and the cost of items in the cart could be summed and the total cost displayed in the cart. Unfortunately, due to competing academic pressures I was unable to complete the summing up part. However, most of the functionality is present. Use of local storage is also implemented. Selected items added to the cart are stored in the local storage file and items removed from the cart are deleted removed from the file. The javaScript for the `shop.html` page is quiet complex, but the process of development enabled me enhance my understanding of DOM element manipulation, as well as learning to navigate the DOM using javaScript from within google chrome console.

# Missing Book Images and External GitHub Error

It is also worth mentioning that when using the book search on the `books.html` page, some of the book images are not returned from the database. This is not a programming error but a remote database issue. I tried to correct the problem, and where books images had zero width an icon was used to fill the space. This gave the `books.html` page some content to work with and made it look better. It works well enough to be able to replace most of the images with zero width.

It is also worth mentioning that when accessing my gitHub link using the icon at the top of the page, an error occurs in the console. This is because some of the content requested from gitHub cannot be accessed without security privileges, not offered to outsiders.

# Code Standard Implementaion
The following code beautifier plugin enabled me to provide consistent coding stands for CSS, javaScript and HTML from within Atom.
https://atom.io/packages/atom-beautify

# References
The following video from Youtube helped with understanding CSS Grid Layout and enabled me to implement CSS Grid into the `index.css` for the `books.html` page.
https://www.youtube.com/watch?v=cMWnIX3ukLI&list=PLlW_ySVoaQ1aNkSTVFulxe4VKQErRS9hG&index=4

The following source helped me to understand and implement the contrast feature into the webpages.
https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast()

The following source helped me to understand how to display the range input slider vertically implemented in `index.css` and all pages.
https://stackoverflow.com/questions/15935837/how-to-display-a-range-input-slider-vertically

The following source helped me to better understand and implement the querySelectorAll method in `index.js`, `projects.js` and `shop.js`.
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

The following Youtube video's helped me to better understand gitHub workflow
https://www.youtube.com/watch?v=E8hhHKlq6rk
https://www.youtube.com/watch?v=z8CYDyFqzp0

The following source helped me to better understand how to access adjacent elements within the DOM using nextElementSibling and previousElementSibling in the `shop.js` file.
https://webplatform.github.io/docs/dom/Element/previousElementSibling/
The following source helped me to understand nextElementSibling and previousElementSibling and the use of the 'push' method on an array. The methods were implemented in the `shop.js` file.
https://attacomsian.com/blog/javascript-dom-get-the-next-and-previous-siblings-of-an-element

The following source helped me to better understand json.stringify and json.parse commands implemented in the `shop.js` file.
https://www.digitalocean.com/community/tutorials/js-json-parse-stringify#:~:text=parse%20and%20stringify%20.-,JSON.,it%20into%20a%20JSON%20string.

The following source helped me to implement the openLibrary API into the `books.js` file.
https://openlibrary.org/dev/docs/restful_api

The following sources helped me to understand how to convert a string into a number using javascript and the meaning of Nan. The parseInt method was impleneted in `projects.js` file.
https://www.tutorialspoint.com/how-to-convert-a-string-into-integer-in-javascript

The following source helped me to understand how to use querySelectorAll to get a checkbox element using input[type="checkbox"]. This helped in the `shop.js` file.
https://stackoverflow.com/questions/14800954/how-to-check-if-all-checkboxes-are-unchecked/14801145
