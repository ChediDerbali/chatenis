function decipher(c,d) {
    var dec = document.getElementById(d);
    console.log(dec);
    var msg = document.getElementById(c).innerHTML;
  
    dec.innerHTML = msg;
    console.log(msg);
  };

  function decrypt() {
    if (document.getElementById('deaffine').checked) {
        document.getElementById('deifAffine').style.display = 'block';
        document.getElementById('deifSubstitution').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifOther').style.display = 'none';

    } else if (document.getElementById('desubstitution').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifSubstitution').style.display = 'block';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifOther').style.display = 'none';

    } else if (document.getElementById('deporta').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifSubstitution').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'block';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifOther').style.display = 'none';

    } else if (document.getElementById('devigenere').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifSubstitution').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'block';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifOther').style.display = 'none';

    } else if (document.getElementById('debeaufort').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifSubstitution').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'block';
        document.getElementById('deifOther').style.display = 'none';

    } else if (document.getElementById('deother').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifSubstitution').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifOther').style.display = 'block';
    }
}