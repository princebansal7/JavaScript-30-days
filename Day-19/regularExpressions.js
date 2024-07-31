// 1: Match all occurrences of the word “JavaScript”

const text1 = "I love JavaScript! JavaScript is great for web development.";
const regex1 = /JavaScript/g;
const matches1 = text1.match(regex1);
console.log('Matches for "JavaScript":', matches1);

// 2. Match all digits in a string
const text2 = "My phone number is 123-456-7890 and my zip code is 98765.";
const regex2 = /\d+/g;
const matches2 = text2.match(regex2);
console.log("Matches for digits:", matches2);

// 3. Match all words that start with a capital letter
const text3 = "Hello World! This is a Test String with Capital Letters.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = text3.match(regex3);
console.log("Words starting with a capital letter:", matches3);

// 4. Match all sequences of one or more digits
const text4 = "The dates are 2024-07-30 and 2025-01-01.";
const regex4 = /\d+/g;
const matches4 = text4.match(regex4);
console.log("Sequences of digits:", matches4);

// 5. Capture area code, central office code, and line number from a US phone number
const phoneNumber = "(123) 456-7890";
const regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;
const match5 = phoneNumber.match(regex5);
if (match5) {
    console.log("Area code:", match5[1]);
    console.log("Central office code:", match5[2]);
    console.log("Line number:", match5[3]);
}

// 6. Capture the username and domain from an email address
const email = "user@example.com";
const regex6 = /^(\w+)@(\w+\.\w+)$/;
const match6 = email.match(regex6);
if (match6) {
    console.log("Username:", match6[1]);
    console.log("Domain:", match6[2]);
}

// 7. Match a word only if it is at the beginning of a string
const text7 = "Welcome to the world of regex.";
const regex7 = /^\b\w+\b/;
const match7 = text7.match(regex7);
console.log("Word at the beginning of the string:", match7);

// 8. Match a word only if it is at the end of a string
const text8 = "We are learning regex.";
const regex8 = /\b\w+\b$/;
const match8 = text8.match(regex8);
console.log("Word at the end of the string:", match8);

// 9. Validate a simple password
const password = "P@ssw0rd";
const regex9 =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isValidPassword = regex9.test(password);
console.log("Is the password valid?", isValidPassword);

// 10. Validate a URL
const url = "https://www.example.com";
const regex10 = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}\/?$/;
const isValidUrl = regex10.test(url);
console.log("Is the URL valid?", isValidUrl);
