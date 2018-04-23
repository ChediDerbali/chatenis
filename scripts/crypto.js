function crypt() {
    if (document.getElementById('affine').checked) {
        document.getElementById('ifAffine').style.display = 'block';
        document.getElementById('ifSubstitution').style.display = 'none';
        document.getElementById('ifPorta').style.display = 'none';
        document.getElementById('ifVigenere').style.display = 'none';
        document.getElementById('ifBeaufort').style.display = 'none';
        document.getElementById('ifOther').style.display = 'none';

    } else if (document.getElementById('substitution').checked) {
        document.getElementById('ifAffine').style.display = 'none';
        document.getElementById('ifSubstitution').style.display = 'block';
        document.getElementById('ifPorta').style.display = 'none';
        document.getElementById('ifVigenere').style.display = 'none';
        document.getElementById('ifBeaufort').style.display = 'none';
        document.getElementById('ifOther').style.display = 'none';

    } else if (document.getElementById('porta').checked) {
        document.getElementById('ifAffine').style.display = 'none';
        document.getElementById('ifSubstitution').style.display = 'none';
        document.getElementById('ifPorta').style.display = 'block';
        document.getElementById('ifVigenere').style.display = 'none';
        document.getElementById('ifBeaufort').style.display = 'none';
        document.getElementById('ifOther').style.display = 'none';

    } else if (document.getElementById('vigenere').checked) {
        document.getElementById('ifAffine').style.display = 'none';
        document.getElementById('ifSubstitution').style.display = 'none';
        document.getElementById('ifPorta').style.display = 'none';
        document.getElementById('ifVigenere').style.display = 'block';
        document.getElementById('ifBeaufort').style.display = 'none';
        document.getElementById('ifOther').style.display = 'none';

    } else if (document.getElementById('beaufort').checked) {
        document.getElementById('ifAffine').style.display = 'none';
        document.getElementById('ifSubstitution').style.display = 'none';
        document.getElementById('ifPorta').style.display = 'none';
        document.getElementById('ifVigenere').style.display = 'none';
        document.getElementById('ifBeaufort').style.display = 'block';
        document.getElementById('ifOther').style.display = 'none';

    } else if (document.getElementById('other').checked) {
        document.getElementById('ifAffine').style.display = 'none';
        document.getElementById('ifSubstitution').style.display = 'none';
        document.getElementById('ifPorta').style.display = 'none';
        document.getElementById('ifVigenere').style.display = 'none';
        document.getElementById('ifBeaufort').style.display = 'none';
        document.getElementById('ifOther').style.display = 'block';
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
    } else if (document.getElementById('substitution').checked) {
        key = document.getElementById('keySub').value;
        return (applySubsti(char, key));
    } else if (document.getElementById('porta').checked) {
        key = document.getElementById('keyPorta').value;
        return (applyPorta(char, key));
    } else if (document.getElementById('vigenere').checked) {
        key = document.getElementById('keyVigenere').value;
        return (applyVigenere(char, key));
    } else if (document.getElementById('beaufort').checked) {
        key = document.getElementById('keyBeaufort').value;
        return (applyBeaufort(char, key));
    } else if (document.getElementById('other').checked) {
        return (applyOther(char));
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

function applySubsti(char, key) {
    //TO DO : Substitution to be implimented
    return (char + ' Substitution to be implimented (' + key + ')')
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

    return (resultat + ' Porta to be implimented (' + key + ')');
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
    return (resultat + ' vigenere to be implimented (' + key + ')');

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
    return (resultat + ' Beaufort to be implimented (' + key + ')');

}

function applyOther(char) {
    //TO DO : other to be implimented
    return (char + ' other to be implimented');

}

