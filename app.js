

{
const heading = document.querySelector(".title")

let offset = 0

function inc(){

    if(offset >= 1000){
        return null
    }
    else if(offset >= 100){
        offset += 100
    }
    else if(offset >= 10){
        offset += 10
    }
    else{
        offset++
    }
    heading.innerHTML = offset
}

function dec(){
    if(offset > 100){
        offset -=100
    }
    else if(offset > 10){
        offset -= 10
    }
    else if(offset === 0){
        return null
    }
    else{
        offset--
    }
    heading.innerHTML = offset
}
}

document.getElementById('btn-ict').addEventListener('click', function() {
    let audio = document.getElementById('audio');
    audio.play();
  });
document.getElementById('btn-dct').addEventListener('click', function() {
    let audio = document.getElementById('audio');
    audio.play();
  });



  {
    //1
    //Natan velosiped haydashni yaxshi ko'radi. Neytan suvsizlanish muhimligini bilganligi sababli, velosipedda har soatda 0,5 litr suv ichadi. Sizga soatlab vaqt beriladi va siz Neytan ichadigan litr sonini eng kichik qiymatga yaxlitlab qaytarishingiz kerak.
    const litres = time => Math.floor(time * 0.5)
    console.log(litres(3));
  }


  {
      //2
      //1 dan songacha bo'lgan har bir sonning yig'indisini topadigan dastur tuzing. Raqam har doim 0 dan katta musbat butun son bo'ladi. Sizning funksiyangiz faqat natijani qaytarishi kerak, quyidagi misolda qavslar orasida ko'rsatilgan narsa bu natijaga qanday erishishingiz va bu uning bir qismi emas, namunali testlarga qarang.
      let summation = function (num) {
          let sum = 0
          for(let i = 0; i <= num; i++){
              sum = sum+i
            }
            return sum
        }
        console.log(summation(8));
    }

    {
        //3
        //Ba'zi qo'ylar o'z joyida yo'qolishi mumkin bo'lgan qo'ylar qatorini/ro'yxatini ko'rib chiqing. Bizga massivdagi qo'ylar sonini hisoblaydigan funksiya kerak
        function countSheeps(sheep) {
            let result = 0;
            for (let i = 0; i < sheep.length; i++) {
                if (sheep[i] === true) {
                    result++;
                }
            }
            return result;
        }
        console.log(countSheeps([true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true]));
        }

        {
            //4
            //Booleanni stringga aylantirish
            function booleanToString(b){
                if(b === true){
                    return b.toString()
                }else{
                    return b.toString()
                }
            }
            console.log(booleanToString(false));
        }

        {
            //5
            //Sizning vazifangiz to'rtta asosiy matematik amallarni bajaradigan funktsiyani yaratishdir.
            //Funktsiya uchta argumentni olishi kerak - operatsiya (string/char), qiymat1 (raqam), qiymat2 (raqam).
            //Funktsiya tanlangan amalni qo'llaganidan keyin raqamlar natijasini qaytarishi kerak.
            function basicOp(operation, value1, value2){
                switch (operation){
                    case "+":
                        return value1 + value2
                        break
                        case "-":
                            return value1 - value2
                            break
                            case "*":
                                return value1 * value2
                                break
                                case "/":
                                    return value1 / value2
                                    break
                                }
                            }
                            console.log(basicOp('+', 4, 7));
                        }

                        {
    //6
    //Yillarni asrga o'tqazuvchi funksiya yarating
    const century =  year =>  Math.floor((year - 1) / 100) + 1;
    console.log(century(1967));
}

{
    //7
    //Massivdagi eng kichik butun sonni topuvchi funksiya
    const findSmallestInt = arr => Math.min(...arr)
    console.log(findSmallestInt([10, 23, 14, 2, 6]));
}

{
    //8
    //Stringdagi bo'shliqlarni olib tashlavchi funksiya
    const noSpace = x => x.replace(/\s+/g, '')
    console.log(noSpace("Hello World !     : )"));
}

{
    //9
    //Butun sonni ikki barobarga oshiruvchi funksiya
    const doubleInteger = i => i * 2
    console.log(doubleInteger(23));
}

{
    //10
    //Foydalanuvchi ismini "Hello, <name> how are you doing today?" ushbu tartibda chiqaruvchi funksiya tuzing
    let greet = name => `Hello, ${name} how are you doing today?`
    console.log(greet(`John`));
}

{
  //11
  //Satrni raqamga aylantirish
  const stringToNumber = str => parseInt(str)
  console.log(stringToNumber("1234"));
}

{
    //12
    //Sinfdoshlaringiz sizdan ular uchun bir nechta hujjatlarni nusxalashingizni so'rashdi. Bilasizmi, "n" sinfdoshlari bor va hujjatlarda "m" sahifalari bor.Sizning vazifangiz sizga qancha bo'sh sahifa kerakligini hisoblashdir. Agar n < 0yoki m < 0qaytib kelsa 0.
    const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0;
    console.log(paperwork(5, 6));
}

{
    //13
    //"h" Soat yarim tundan keyin soatlar, "m" daqiqalar va "s" soniyalarni ko'rsatadi .Sizning vazifangiz yarim tundan beri vaqtni millisekundlarda qaytaradigan funktsiyani yozishdir.
    //masalan: h = 0 m = 1 s = 1 result = 61000
    const past = (h, m, s) => (h * 3_600_000) + (m * 60_000) + (s * 1_000)
    console.log(past(3, 45, 2));
}

{
    //14
    //Bu kata berilgan sonni agar juft son bo'lsa sakkizga, aks holda to'qqizga ko'paytirish haqida.
    const simpleMultiplication = number => number % 2 ? number * 9 : number * 8;
    console.log(simpleMultiplication(2));
}

{
    //15
    //Qahramon o'z vazifasini bajarish uchun qasrga ketmoqda. Biroq, unga qasr bir nechta kuchli ajdarlar bilan o'ralganligini aytishdi! Har bir ajdaho mag'lub bo'lish uchun 2 ta o'q oladi, bizning qahramonimiz qancha o'q olib yurishi kerakligini bilmaydi.. Agar u ma'lum miqdordagi o'qlarni ushlab, boshqa ma'lum miqdordagi ajdarlar bilan jang qilish uchun oldinga siljiydi deb faraz qilsak, u omon qoladimi? Ha bo'lsa rost, aks holda noto'g'ri deb qaytaring :)
    const hero = (bullets, dragons) => bullets >= dragons * 2
    console.log(hero(10, 6));
}

{
    //16
    //Sinfingizda test bor edi va siz uni topshirdingiz. Tabriklaymiz! Ammo siz ambitsiyali odamsiz. Siz o'z sinfingizdagi o'rtacha talabadan yaxshiroq ekanligingizni bilishni xohlaysiz. Siz tengdoshlaringizning test ballari bilan massiv olasiz. Endi o'rtachani hisoblang va balingizni solishtiring! true Yaxshiroq bo'lsangiz, qaytib keling , aks holda false! Eslatma: Sizning ballaringiz sinfingiz ballari qatoriga kiritilmagan. O'rtacha ballni hisoblashda ularni unutmang
    function betterThanAverage(classPoints, yourPoints) {
        let sum = 0
        for(let i = 0; i < classPoints.length; i++){
          sum = sum + classPoints[i]
        }
        let a = sum / classPoints.length
        return yourPoints > a
      }
    console.log(betterThanAverage([100, 43, 56, 28, 72], 94));
}

{
    //17
    //Tana massasi indeksini hisoblaydigan bmi funksiyasini yozing (bmi = vazn / balandlik 2 ). agar bmi <= 18,5 bo'lsa, "kam vazn" agar bmi <= 25.0 "Oddiy" ni qaytarsa agar bmi <= 30,0 bo'lsa, "Ortiqcha vazn" agar bmi > 30 bo'lsa, "Semiz"
    function bmi(weight, height) {
        let bmi = weight / Math.pow(height, 2)
        if(bmi <= 18.5) return "Underweight"
        else if(bmi <= 25) return "Normal"
        else if(bmi <= 30) return  "Overweight"
        else if(bmi > 30) return "Obese"
      }
    console.log(bmi(80, 1.80));
}

{
    //18
    //zning vazifangiz - kirish sifatida butun sonlar ro'yxatini qabul qiladigan ikkita funktsiyani ( maxva min, yoki maximumva va hokazo, tilga qarab) qilish va mos ravishda ushbu ro'yxatdagi eng katta va eng kichik sonni qaytarish.minimum
    //[4,6,2,1,9,63,-134,566]
    var min = function(list){
        return Math.min(...list)
    }

    var max = function(list){
        return Math.max(...list);
    }
    console.log(min([4,6,2,1,9,63,-134,566] ));
    console.log(max([4,6,2,1,9,63,-134,566] ));
}

{
    //19
    //n dan 1 gacha bo'lgan butun sonlar massivini qaytaruvchi funktsiyani tuzing, bu erda n>0. Misol: n=5-->[5,4,3,2,1]
    const reverseSeq = n => {
        let result = []
        for(let i = n; i > 0; i--){
          result.push(i)
        }
        return result
      };
    console.log(reverseSeq(7));
}