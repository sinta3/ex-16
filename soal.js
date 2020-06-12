function cat(age) {
    age = prompt('masukkan umur kucing');
    if (age == 1) {
        alert('umur kucing 15 kali manusia');
    } 
    else if(age == 2) {
        alert('umur kucing 24 kali manusia');
    }
    else if(age >= 3) {
        age = (age-2) * 4 + 24;
        alert(`umur kucing ${age} kali manusia`);
    }
    else {
        alert('angka yang anda masukkan salah'); 
    }
    return age;
};

document.write(`umur kucing aslinya ${cat()}`);