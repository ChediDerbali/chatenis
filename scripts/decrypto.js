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
        document.getElementById('deifAdfvgx').style.display = 'none';

    } else if (document.getElementById('deplayfair').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifPlayfair').style.display = 'block';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifAdfvgx').style.display = 'none';

    } else if (document.getElementById('deporta').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifPlayfair').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'block';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifAdfvgx').style.display = 'none';

    } else if (document.getElementById('devigenere').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifPlayfair').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'block';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifAdfvgx').style.display = 'none';

    } else if (document.getElementById('debeaufort').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifPlayfair').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'block';
        document.getElementById('deifAdfvgx').style.display = 'none';

    } else if (document.getElementById('deadfvgx').checked) {
        document.getElementById('deifAffine').style.display = 'none';
        document.getElementById('deifPlayfair').style.display = 'none';
        document.getElementById('deifPorta').style.display = 'none';
        document.getElementById('deifVigenere').style.display = 'none';
        document.getElementById('deifBeaufort').style.display = 'none';
        document.getElementById('deifAdfvgx').style.display = 'block';
    }
};


function unapplyConvert(char) {
    if (document.getElementById('deaffine').checked) {
        A = document.getElementById('deA').value;
        B = document.getElementById('deB').value;
        return (unapplyAffine(char, A, B));
    } else if (document.getElementById('deplayfair').checked) {
        key = document.getElementById('dekeyPla').value;
        return (unapplySubsti(char, key));
    } else if (document.getElementById('deporta').checked) {
        key = document.getElementById('dekeyPorta').value;
        return (unapplyPorta(char, key));
    } else if (document.getElementById('devigenere').checked) {
        key = document.getElementById('dekeyVigenere').value;
        return (unapplyVigenere(char, key));
    } else if (document.getElementById('debeaufort').checked) {
        key = document.getElementById('dekeyBeaufort').value;
        return (unapplyBeaufort(char, key));
    } else if (document.getElementById('deadfvgx').checked) {
        key = document.getElementById('dekeyAdfvgx').value;
        return (unapplyAdfvgx(char,key));
    } else {
        return (char);
    }
};


function unapplyAffine(char, a, b) {
    //TO DO : Affine to be implimented
    return (char + ' Affine to be implimented000000000 (' + a + ',' + b + ')');
};

function unapplySubsti(char, key) {
    //TO DO : Playfair to be implimented
    return (char + ' Playfair to be implimented00000000000 (' + key + ')')
};

function unapplyPorta(char, key) {
    //TO DO : Porta to be implimented
    return (char + ' Porta to be implimented00000000000000 (' + key + ')');
};

function unapplyVigenere(char, key) {
    //TO DO : vigenere to be implimented
    return (char + ' vigenere to be implimented00000000000000 (' + key + ')');

};

function unapplyBeaufort(char, key) {
    //TO DO : Beaufort to be implimented
    return (char + ' Beaufort to be implimented00000000000000 (' + key + ')');

};

function unapplyAdfvgx(char) {
    //TO DO : adfvgx to be implimented
    return (char + ' adfvgx to be implimented00000000000000 (' + key + ')');

};