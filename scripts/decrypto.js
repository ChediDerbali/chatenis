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
};


function unapplyConvert(char) {
    if (document.getElementById('deaffine').checked) {
        A = document.getElementById('deA').value;
        B = document.getElementById('deB').value;
        return (applyAffine(char, A, B));
    } else if (document.getElementById('desubstitution').checked) {
        key = document.getElementById('dekeySub').value;
        return (applySubsti(char, key));
    } else if (document.getElementById('deporta').checked) {
        key = document.getElementById('dekeyPorta').value;
        return (applyPorta(char, key));
    } else if (document.getElementById('devigenere').checked) {
        key = document.getElementById('dekeyVigenere').value;
        return (applyVigenere(char, key));
    } else if (document.getElementById('debeaufort').checked) {
        key = document.getElementById('dekeyBeaufort').value;
        return (applyBeaufort(char, key));
    } else if (document.getElementById('deother').checked) {
        return (applyOther(char));
    } else {
        return (char);
    }
};


function unapplyAffine(char, a, b) {
    //TO DO : Affine to be implimented
    return (char + ' Affine to be implimented (' + a + ',' + b + ')');
};

function unapplySubsti(char, key) {
    //TO DO : Substitution to be implimented
    return (char + ' Substitution to be implimented (' + key + ')')
};

function unapplyPorta(char, key) {
    //TO DO : Porta to be implimented
    return (char + ' Porta to be implimented (' + key + ')');
};

function unapplyVigenere(char, key) {
    //TO DO : vigenere to be implimented
    return (char + ' vigenere to be implimented (' + key + ')');

};

function unapplyBeaufort(char, key) {
    //TO DO : Beaufort to be implimented
    return (char + ' Beaufort to be implimented (' + key + ')');

};

function unapplyOther(char) {
    //TO DO : other to be implimented
    return (char + ' other to be implimented');

};