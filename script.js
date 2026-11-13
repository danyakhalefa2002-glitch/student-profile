// تعريف المتغيرات
const fullName = "Danya Khalefa";
let age = 24;
const country = "Syria";
const major = "Computer Engineering";
const isStudent = false;
const isWorking = true;
let favoriteColor = null;
let theHobby;

// عرض معلومات الطالب
console.log("---Student Information---");
console.log(`Full Name : ${fullName}`);
console.log(`Age : ${age}`);
console.log(`Country : ${country}`);
console.log(`Major : ${major}`);
console.log(`Is Student : ${isStudent}`);
console.log(`Is Working : ${isWorking}`);
console.log(`Favorite Color : ${favoriteColor}`);
console.log(`The Hobby : ${theHobby}`);

console.log("-------------------------------");

// معرفة نوع البيانات
console.log("---DATA TYPES---");
console.log(`Name Type : ${typeof fullName}`);
console.log(`Age Type : ${typeof age}`);
console.log(`Country Type : ${typeof country}`);
console.log(`Major Type : ${typeof major}`);
console.log(`isStudent Type : ${typeof isStudent}`);
console.log(`Favorite Color Type : ${typeof favoriteColor}`);
console.log(`The Hobby Type : ${typeof theHobby}`);

console.log("--------------------------------");
// حاسبة العمر
console.log("---AGE CALCULATIONS---");
// حساب سنة الميلاد التقريبية
const birthYear = 2026 - age;
console.log(`Birth Year : ${birthYear} `);

// حساب العمر بعد خمس سنوات
const ageAfterFiveYears = age + 5;
console.log(`Age After Five Years : ${ageAfterFiveYears}`);

// حساب السنوات المتبقية لعمر 30
const yearsUntilThirty = 30 - age;
console.log(`Years Until Thirty : ${yearsUntilThirty}`);
