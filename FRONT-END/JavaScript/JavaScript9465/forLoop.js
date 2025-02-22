function name(nm="Jagannath") {
    console.log(nm);
}
for (let i = 0; i <= 100; i++) {
    name(); 
}

for (let i = 0; i <= 100; i++) {
  if (i>=7 && i<=81) {
    break;
  }
  name("Sanket"+i);
}

for (let i = 0; i <= 100; i++) {
  if (i>=7 && i<=81) {
    continue;
  }
  name("Sanket"+i);
}