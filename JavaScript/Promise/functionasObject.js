function MyNumber(value) {
    this.value = value;
    this.getValue = function() {
      return this.value;
    };
    this.add = function(num) {
      this.value += num;
    };
  }
  
  let pos = new MyNumber(54);
  pos.add(10);

  function sub(num) {
    this.value-=num;
    console.log(this.value);
  }

  pos.sub=sub;

  console.log(pos.getValue());  // Output: 64
  
  pos.sub(35); // Output: 29


  