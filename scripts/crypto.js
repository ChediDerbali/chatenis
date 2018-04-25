function crypt() {
    if (document.getElementById('affine').checked) {
        document.getElementById('ifAffine').style.display = 'block';
        document.getElementById('ifPlayfair').style.display = 'none';
        document.getElementById('ifPorta').style.display = 'none';
        document.getElementById('ifVigenere').style.display = 'none';
        document.getElementById('ifBeaufort').style.display = 'none';
        document.getElementById('ifNone').style.display = 'none';

    } else if (document.getElementById('playfair').checked) {
        document.getElementById('ifAffine').style.display = 'none';
        document.getElementById('ifPlayfair').style.display = 'block';
        document.getElementById('ifPorta').style.display = 'none';
        document.getElementById('ifVigenere').style.display = 'none';
        document.getElementById('ifBeaufort').style.display = 'none';
        document.getElementById('ifNone').style.display = 'none';

    } else if (document.getElementById('porta').checked) {
        document.getElementById('ifAffine').style.display = 'none';
        document.getElementById('ifPlayfair').style.display = 'none';
        document.getElementById('ifPorta').style.display = 'block';
        document.getElementById('ifVigenere').style.display = 'none';
        document.getElementById('ifBeaufort').style.display = 'none';
        document.getElementById('ifNone').style.display = 'none';

    } else if (document.getElementById('vigenere').checked) {
        document.getElementById('ifAffine').style.display = 'none';
        document.getElementById('ifPlayfair').style.display = 'none';
        document.getElementById('ifPorta').style.display = 'none';
        document.getElementById('ifVigenere').style.display = 'block';
        document.getElementById('ifBeaufort').style.display = 'none';
        document.getElementById('ifNone').style.display = 'none';

    } else if (document.getElementById('beaufort').checked) {
        document.getElementById('ifAffine').style.display = 'none';
        document.getElementById('ifPlayfair').style.display = 'none';
        document.getElementById('ifPorta').style.display = 'none';
        document.getElementById('ifVigenere').style.display = 'none';
        document.getElementById('ifBeaufort').style.display = 'block';
        document.getElementById('ifNone').style.display = 'none';

    } else if (document.getElementById('None').checked) {
        document.getElementById('ifAffine').style.display = 'none';
        document.getElementById('ifPlayfair').style.display = 'none';
        document.getElementById('ifPorta').style.display = 'none';
        document.getElementById('ifVigenere').style.display = 'none';
        document.getElementById('ifBeaufort').style.display = 'none';
        document.getElementById('ifNone').style.display = 'block';
    }
}



function conversion(c) {
    char = document.getElementById(c).value;
    char = applyConvert(char);
    document.getElementById('message').value = char;

}

function applyConvert(char) {
    if (document.getElementById('affine').checked) {
        A = document.getElementById('A').value;
        B = document.getElementById('B').value;
        return (applyAffine(char, A, B));
    } else if (document.getElementById('playfair').checked) {
        key = document.getElementById('keyPla').value;
        return (applyPlay(char, key));
    } else if (document.getElementById('porta').checked) {
        key = document.getElementById('keyPorta').value;
        return (applyPorta(char, key));
    } else if (document.getElementById('vigenere').checked) {
        key = document.getElementById('keyVigenere').value;
        return (applyVigenere(char, key));
    } else if (document.getElementById('beaufort').checked) {
        key = document.getElementById('keyBeaufort').value;
        return (applyBeaufort(char, key));
    } else if (document.getElementById('None').checked) {
        return (applyNone(char));
    } else {
        return (char);
    }


}

function applyAffine(char, a, b) {
    var resultat = "";
    char = char.toUpperCase();
    var longueur = char.length;


    for (var i = 0; i < longueur; i++) {
        var val = char.charCodeAt(i) - 65;
        if (val >= 0)
            resultat += String.fromCharCode(((a * val + b) % 26) + 65);
        if (char[i] == ' ')
            resultat += ' ';
    }
    return (resultat + ' Affine to be implimented (' + a + ',' + b + ')');
}

function applyPlay(char, key) {
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
            resultat += matrice[5*parseInt(a/5)+(a+1)%5];
            resultat += matrice[5*parseInt(b/5)+(b+1)%5];
        }
        else if(a%5==b%5){
            resultat += matrice[parseInt(a+5)%25];
            resultat += matrice[parseInt(b+5)%25];
        }
        else{
            resultat += matrice[(5*parseInt(a/5)+b%5)%25];
            resultat += matrice[(5*parseInt(b/5)+a%5)%25];
        }
        j = j+2;
    }
    
    return (resultat)
}

function applyPorta(char, key) {
    Alphabet = new Array(13);
    Alphabet[0] = "NOPQRSTUVWXYZABCDEFGHIJKLM"; // AB
    Alphabet[1] = "ZNOPQRSTUVWXYBCDEFGHIJKLMA"; // CD
    Alphabet[2] = "YZNOPQRSTUVWXCDEFGHIJKLMAB"; // EF
    Alphabet[3] = "XYZNOPQRSTUVWDEFGHIJKLMABC"; // GH
    Alphabet[4] = "WXYZNOPQRSTUVEFGHIJKLMABCD"; // IJ
    Alphabet[5] = "VWXYZNOPQRSTUFGHIJKLMABCDE"; // KL
    Alphabet[6] = "UVWXYZNOPQRSTGHIJKLMABCDEF"; // MN
    Alphabet[7] = "TUVWXYZNOPQRSHIJKLMABCDEFG"; // OP
    Alphabet[8] = "STUVWXYZNOPQRIJKLMABCDEFGH"; // QR
    Alphabet[9] = "RSTUVWXYZNOPQJKLMABCDEFGHI"; // ST
    Alphabet[10] = "QRSTUVWXYZNOPKLMABCDEFGHIJ"; // UV
    Alphabet[11] = "PQRSTUVWXYZNOLMABCDEFGHIJK"; // WX
    Alphabet[12] = "OPQRSTUVWXYZNMABCDEFGHIJKL"; // YZ
    char = char.toUpperCase();
    key = key.toUpperCase();
    var longueur = char.length;
    var keyLong = key.length;
    var resultat = "";
    for (var i = 0; i < longueur; i++) {
        var val = char.charCodeAt(i) - 65;
        var valKey = key.charCodeAt(i % keyLong) - 65;
        if (val >= 0) {
            resultat += Alphabet[parseInt(valKey / 2)].charAt(val);
        }
        if (char[i] == ' ')
            resultat += ' ';
    }

    return (resultat);
}

function applyVigenere(char, key) {
    //TO DO : vigenere to be implimented
    char = char.toUpperCase();
    key = key.toUpperCase();
    var longueur = char.length;
    var keyLong = key.length;
    var resultat = "";
    for (var i = 0; i < longueur; i++) {
        var val = char.charCodeAt(i) - 65;
        var valKey = key.charCodeAt(i % keyLong) - 65;
        if (val >= 0) {
            resultat += String.fromCharCode(((val + valKey) % 26) + 65);
        }
        if (char[i] == ' ')
            resultat += ' ';
    }
    return (resultat);

}

function applyBeaufort(char, key) {
    //TO DO : Beaufort to be implimented
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

}

function applyNone(char) {
    //TO DO : None to be implimented
    return (char);

}