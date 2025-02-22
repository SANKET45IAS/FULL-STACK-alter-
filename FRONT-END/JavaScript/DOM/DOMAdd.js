let fheading=document.createElement('h1');
console.log(fheading);

fheading.innerText="Heading Through JS(createElement())";
console.log(fheading.textContent);

let body=document.querySelector('body');

body.prepend(fheading)

body.append(fheading);