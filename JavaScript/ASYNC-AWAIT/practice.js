async function get() {
    function ret() {
        return 100;
    }
    
    function delay(ms) {
        return new Promise(resolve => setTimeout(() => resolve(ret()), ms));
    }

    console.log("S1"); 
    let response = await delay(3000);
    console.log(response);
    console.log("S2");
}

get();
