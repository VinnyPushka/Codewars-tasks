function switcheroo(x) {
    let y = x.split('');
    for (let i = 0; i < y.length; i++){
      (y[i]=='a') ? (y[i] = 'b') :
      (y[i]=='b') ? (y[i] = 'a') : y[i] = 'c'
    }
      return y.join('');
    }
    console.log (switcheroo('accaabbcaacaabbaa'))