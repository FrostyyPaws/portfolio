const CONTACT_STYLING = `
    font-size:20px;
    font-family:verdana,sans-serif;
    color: rgb(45, 48, 54);
`
const CONTACT_MSG = `%c👋 Hey there. Thanks for taking an interest.
💬 Reach out to me via any of the following:
`
const CONTACT_TABLE = { 
    "Email":"parsons.kenneth.c@gmail.com",
    "Phone":"248-892-9404", 
    "GitHub":"https://github.com/KenAKAFrosty",
}
console.log(CONTACT_MSG,CONTACT_STYLING)
console.table(CONTACT_TABLE)
