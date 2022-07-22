// let p = document.getElementById('fullName');
// console.log(p.innerText);
// p.innerHTML = '<p>Tadas Karpavičius</p>'

// let p2 = document.getElementById('popStars');
// let arr = ["Teddy Swims", "Masego", "Allan Stone", "JP Cooper", "as"];
// let stars = "";
// for (let i = 0; i < arr.length; i++) {

//     stars += "<p>" + arr[i] + "</p>";
// function makeid(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() *
//             charactersLength));
//     }
//     return result;
// }

// console.log(makeid(5));


// }
// p2.innerHTML = stars;



// // 1)

// Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra           įterpiamas į h1 tagą
// function insertH1(text) {
//     console.log("<h1>" + text + "</h1>")

// }
// insertH1("Tadas Karpavičius");

// 2)

// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;
// function insertH(text, number) {
//     if (number > 6) {
//         console.log("6 is max");
//     } else if (number < 6) {
//         console.log("<h" + number + ">" + text + "</h" + number + ">");
//     }

// }
// insertH("Tadas Karpavičius", 5);

// 3)

// Sugeneruokite atsitiktinį stringą iš raidžių ir skaičių. Visus skaitmenis stringe įdėkite į h1 tagą. Raides palikite. Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) Keitimui naudokite pirmo patobulintą (jeigu reikia) uždavinio funkciją.
// function randomString() {
//     let text = "";
//     let random = "";
//     for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
//     }

//     let randomNumber = Math.floor(Math.random() * 10);
//     for (let i = 0; i < randomNumber; i++) {
//         random += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//     }
//     text += "<h1>" + random + "</h1>";
//     console.log(text);

// }
// console.log(randomString());


// 4)

// Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)
function countDivisible(number) {
    let count = 0;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            // if (number ==)
            count++;
        }
    }

    return count;
}
countDivisible(18);

// 5)

// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
// function countD() {
//     let arr = [];
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.floor(Math.random() * (78 - 33) + 33));
//     }



//     for (let i = 0; i < arr.length; i++) {
//         for (let a = i; a < arr.length - 1; a++) {
//             if (countDivisible(arr[a]) > countDivisible(arr[a + 1])) {
//                 let temp = arr[a];
//                 arr[a] = arr[a + 1];
//                 arr[a + 1] = temp;
//             }
//         }
//         // console.log(countDivisible(arr[i]));
//         // console.log(countDivisible(arr[i + 1]));

//     }
//     // let highestToLowest = countDivisible(arr[i]).sort((a, b) => b - a);
//     // return highestToLowest;
//     console.log(arr);
// }
// countD();

// arr = [1, 22, 3, 44, 5, 6, 37, 8, 9, 70, 1003];

// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let a = 0; a < arr.length; a++) {

//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//     }

// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     for (let a = i + 1; a < arr.length; a++) {

//         if (arr[i] < arr[a]) {
//             let temp = arr[i];
//             arr[i] = arr[a];
//             arr[a] = temp;
//         }
//     }

//     console.log(arr);
// }


// 6)
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.
// function removePrimes() {
//     let arr = [];
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.floor(Math.random() * (778 - 333) + 333));
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (countDivisible(arr[i]) > 1) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//     console.log(arr);
// }
// removePrimes();

// 7)

// Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;
function arrayRandom() {

    return Array.from({ length: 19 }, () => Math.floor(Math.random() * 100));
}


nArr = arrayRandom();
nArr.push(0);

for (let i = 0; i < Math.floor(Math.random() * 4); i++) {
    let nnArr = arrayRandom();
    nnArr.push(nArr);
    nArr = nnArr;
}

console.log(nArr);

// function randomArray() {
//     let arr = [];
//     let random = "";
//     for (let i = 0; i < Math.floor(Math.random() * 20) + 10; i++) {
//         arr.push(Math.floor(Math.random() * 20));
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (i == arr.length - 1) {
//             arr[i] = arrayRandom();
//         } else {
//             arr[i] = Math.floor(Math.random() * (20 - 10)) + 10;
//         }
//     }
//     console.log(arr);
// }
// randomArray();

// create a random array with last number beeing another random array
// function randomArray() {



// 8)

// sugeneruoti masyvą, kuris kurtų atsitiktinį skaičių masyvų kaip savo paskutinį skaičių, paskutiniame jo masyve yra 0.
// function randomArray() {
// randomArray();


