function decipher(c, d) {
    var res = document.getElementById(d);
    console.log(res);
    var msg = document.getElementById(c).innerHTML;

    res.innerHTML = unapplyConvert(msg);;
    console.log(msg);
};

function decrypt() {
    if (document.getElementById('deaffine').checked) {
        document.getElementById('deifAffine').style.display = 'block';
        document.getElementById('deifPlayfair').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifNone').style.display = 'none';

    } else if (document.getElementById('deplayfair').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifPlayfair').style.display = 'block';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifNone').style.display = 'none';

    } else if (document.getElementById('deporta').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifPlayfair').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'block';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifNone').style.display = 'none';

    } else if (document.getElementById('devigenere').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifPlayfair').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'block';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifNone').style.display = 'none';

    } else if (document.getElementById('debeaufort').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifPlayfair').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'block';
        document.getElementById('deifNone').style.display = 'none';

    } else if (document.getElementById('deNone').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifPlayfair').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifNone').style.display = 'block';
    }
};


function unapplyConvert(char) {
    if (document.getElementById('deaffine').checked) {
        A = document.getElementById('deA').value;
        B = document.getElementById('deB').value;
        return (unapplyAffine(char, A, B));
    } else if (document.getElementById('deplayfair').checked) {
        key = document.getElementById('dekeyPla').value;
        return (unapplyPlay(char, key));
    } else if (document.getElementById('deporta').checked) {
        key = document.getElementById('dekeyPorta').value;
        return (unapplyPorta(char, key));
    } else if (document.getElementById('devigenere').checked) {
        key = document.getElementById('dekeyVigenere').value;
        return (unapplyVigenere(char, key));
    } else if (document.getElementById('debeaufort').checked) {
        key = document.getElementById('dekeyBeaufort').value;
        return (unapplyBeaufort(char, key));
    } else if (document.getElementById('deNone').checked) {
        key = document.getElementById('dekeyNone').value;
        return (unapplyNone(char));
    } else {
        return (char);
    }
};


function unapplyAffine(char, a, b) {
    //TO DO : Affine to be implimented
    return (char + ' Affine to be implimented000000000 (' + a + ',' + b + ')');
};

function unapplyPlay(char, key) {
    var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    var resultat = "";
    char = char.toUpperCase();
    key = key.toUpperCase();
    var matrice = "";
    var j = 0;
    for (var i = 0; i < key.length; i++){
        if (matrice.indexOf(key[i]) < 0){
            matrice+=key[i];
        }
    }
    for (var i=0;i<25;i++){
        if(matrice.length<25){
            if(matrice.indexOf(Alphabet[i]) < 0){
                matrice+=Alphabet[i];
            }
        }
    }
    while(j < char.length-1){
        var a = matrice.indexOf(char[j]);
        var b = matrice.indexOf(char[j+1]); 
        if(parseInt(a/5)==parseInt(b/5)){
            resultat += matrice[5*parseInt(a/5)+(5+a-1)%5];
            resultat += matrice[5*parseInt(b/5)+(5+b-1)%5];
        }
        else if(a%5==b%5){
            resultat += matrice[parseInt(a-5+25)%25];
            resultat += matrice[parseInt(b-5+25)%25];
        }
        else{
            resultat += matrice[(5*parseInt(a/5)+b%5)%25];
            resultat += matrice[(5*parseInt(b/5)+a%5)%25];
        }
        j = j+2;
    }
    
    return (resultat);
};

function unapplyPorta(char, key) {
    //TO DO : Porta to be implimented
    return (char + ' Porta to be implimented00000000000000 (' + key + ')');
};

function unapplyVigenere(char, key) {
    char = char.toUpperCase();
    key = key.toUpperCase();
    var longueur = char.length;
    var keyLong = key.length;
    var res = "";
    for (var i = 0; i < longueur; i++) {
        var val = char.charCodeAt(i) - 65;
        var valKey = key.charCodeAt(i % keyLong) - 65;
        if (val >= 0) {
            res += String.fromCharCode(((val - valKey + 26) % 26) + 65);
        }

        if (char[i] == ' ')
            res += ' ';
    }

    return (res);

};


function unapplyBeaufort(char, key) {
    char = char.toUpperCase();
    key = key.toUpperCase();
    var longueur = char.length;
    var keyLong = key.length;
    var resultat = "";
    for (var i = 0; i < longueur; i++) {
        var val = char.charCodeAt(i) - 65;
        var valKey = key.charCodeAt(i % keyLong) - 65;
        if (val >= 0) {
            resultat += String.fromCharCode(((valKey - val + 26) % 26) + 65);
        }
        if (char[i] == ' ')
            resultat += ' ';
    }

    return (resultat);

};

function unapplyNone(char) {
    //TO DO : None to be implimented
    return (char);

};