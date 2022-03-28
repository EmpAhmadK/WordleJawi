export const CONFIG = {
  tries: 6, // This changes how many tries you get to finish the wordle
  language: 'جاوي', // This changes the display name for your language
  wordLength: 5, // This sets how long each word is based on how many characters (as defined in orthography.ts) are in each word
  author: 'احمد علي کريم', // Put your name here so people know who made this Wordle!
  authorWebsite: 'https://ahmadalikarim.com', // Put a link to your website or social media here
  wordListSource: 'قاموس ديوان بهاس دان ڤوستاک', // Describe the source material for your words here
  wordListSourceLink: 'ttps://prpm.dbp.gov.my', // Put a link to the source material for your words here
  //
  // THESE NEXT SETTINGS ARE FOR ADVANCED USERS
  //
  googleAnalytics: '', // You can use this if you use Google Analytics
  shuffle: false, // whether to shuffle the words in the wordlist each time you load the app (note: you will lose the 'word of the day' functionality if this is true)
  normalization: 'NFC', // whether to apply Unicode normalization to words and orthography - options: 'NFC', 'NFD', 'NKFC', 'NKFD', false
  startDate: 'April 3, 2022 00:00:00', // what date and time to start your game from
  defaultLang: 'ms-Arab', // the default interface language
  availableLangs: ['ms-Arab', 'ms', 'en'], // the options available to the user for translation languages
}
