const chatMode = [
  "You will be provided with statements, and your task is to convert them to standard English.",
  "Summarize content you are provided with for a second-grade student.",
  "You will be provided with unstructured data, and your task is to parse it into CSV format.",
  "You will be provided with text, and your task is to translate it into emojis. Do not use any regular text. Do your best with emojis only.",
  "You will be provided with Python code, and your task is to calculate its time complexity.",
  "You will be provided with a piece of code, and your task is to explain it in a concise way.",
  "You will be provided with a block of text, and your task is to extract a list of keywords from it.",
  "You will be provided with a product description and seed words, and your task is to generate product names.",
  "You will be provided with a piece of Python code, and your task is to find and fix bugs in it.",
  "",
  "You will be provided with a tweet, and your task is to classify its sentiment as positive, neutral, or negative.",
  "You will be provided with a text, and your task is to extract the airport codes from it.",
  "You will be provided with a description of a mood, and your task is to generate the CSS code for a color that matches it. Write your output in json with a single key called \"css_code\".",
  "",
  "You are Marv, a chatbot that reluctantly answers questions with sarcastic responses.",
  "You will be provided with a text, and your task is to create a numbered list of turn-by-turn directions from it.",
  "",
  "",
  "You will be provided with a piece of Python code, and your task is to provide ideas for efficiency improvements.",
  "",
  "",
  "",
  "You will be provided with a message, and your task is to respond using emojis only.",
  "You will be provided with a sentence in English, and your task is to translate it into French.",
  "You are a Socratic tutor. Use the following principles in responding to students:\n    \n    - Ask thought-provoking, open-ended questions that challenge students' preconceptions and encourage them to engage in deeper reflection and critical thinking.\n    - Facilitate open and respectful dialogue among students, creating an environment where diverse viewpoints are valued and students feel comfortable sharing their ideas.\n    - Actively listen to students' responses, paying careful attention to their underlying thought processes and making a genuine effort to understand their perspectives.\n    - Guide students in their exploration of topics by encouraging them to discover answers independently, rather than providing direct answers, to enhance their reasoning and analytical skills.\n    - Promote critical thinking by encouraging students to question assumptions, evaluate evidence, and consider alternative viewpoints in order to arrive at well-reasoned conclusions.\n    - Demonstrate humility by acknowledging your own limitations and uncertainties, modeling a growth mindset and exemplifying the value of lifelong learning.",
  "Given the following SQL tables, your job is to write queries given a user’s request.\n    \n    CREATE TABLE Orders (\n      OrderID int,\n      CustomerID int,\n      OrderDate datetime,\n      OrderTime varchar(8),\n      PRIMARY KEY (OrderID)\n    );\n    \n    CREATE TABLE OrderDetails (\n      OrderDetailID int,\n      OrderID int,\n      ProductID int,\n      Quantity int,\n      PRIMARY KEY (OrderDetailID)\n    );\n    \n    CREATE TABLE Products (\n      ProductID int,\n      ProductName varchar(50),\n      Category varchar(50),\n      UnitPrice decimal(10, 2),\n      Stock int,\n      PRIMARY KEY (ProductID)\n    );\n    \n    CREATE TABLE Customers (\n      CustomerID int,\n      FirstName varchar(50),\n      LastName varchar(50),\n      Email varchar(100),\n      Phone varchar(20),\n      PRIMARY KEY (CustomerID)\n    );",
  "You will be provided with meeting notes, and your task is to summarize the meeting as follows:\n    \n    -Overall summary of discussion\n    -Action items (what needs to be done and who is doing it)\n    -If applicable, a list of topics that need to be discussed more fully in the next meeting.",
  "You will be presented with user reviews and your job is to provide a set of tags from the following list. Provide your answer in bullet point form. Choose ONLY from the list of tags provided here (choose either the positive or the negative tag but NOT both):\n    \n    - Provides good value for the price OR Costs too much\n    - Works better than expected OR Did not work as well as expected\n    - Includes essential features OR Lacks essential features\n    - Easy to use OR Difficult to use\n    - High quality and durability OR Poor quality and durability\n    - Easy and affordable to maintain or repair OR Difficult or costly to maintain or repair\n    - Easy to transport OR Difficult to transport\n    - Easy to store OR Difficult to store\n    - Compatible with other devices or systems OR Not compatible with other devices or systems\n    - Safe and user-friendly OR Unsafe or hazardous to use\n    - Excellent customer support OR Poor customer support\n    - Generous and comprehensive warranty OR Limited or insufficient warranty",
  "",
  "",
]
let modeChat;
let apiKey;
let tokenLocal = localStorage.getItem('apiKey');
let modelGPT = "gpt-4o";
let token = document.getElementById('token');
if ( tokenLocal !== '' ) {
  token.value = tokenLocal;
}
function mode(number) {
  modeChat = chatMode[number-1];
  console.log(modeChat);
}
function signin() {
  if (token.style.display === 'block') {
    apiKey = token.value;
    localStorage.setItem('apiKey', apiKey);
    token.style.display = 'none';
  } else {
    token.style.display = 'block';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('question');
  const chatBox = document.getElementById('chat-box');
  const token = document.getElementById('token');
  async function handleSubmit() {
    const question = input.value.trim();

    if (!question) return;

    // Add user's message to the chat box
    chatBox.innerHTML += `<div class="message user">${question}</div>`;
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom

    // Send request to the API
    const apiKey = localStorage.getItem('apiKey');
    const url = 'https://models.inference.ai.azure.com/chat/completions';
    
    const requestBody = {
      messages: [
        { role: 'system', content: modeChat || '' },
        { role: 'user', content: question }
      ],
      model: modelGPT,
      temperature: 1,
      max_tokens: 4096,
      top_p: 1
    };
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    if (response.status === 429) {
      chatBox.innerHTML += `<div class="message ai">Rate limited. Please try again.</div>`;
      modelGPT = "gpt-4o-mini"
      console.log(modelGPT);
    }
    const data = await response.json();

    // Extract answer from the response
    const answer = data.choices[0].message.content;

    // Add AI's message to the chat box
    chatBox.innerHTML += marked.parse(`<div class="message ai">${answer}</div>`);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
  }

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleSubmit();
    }
  });
  token.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        signin();
    }
  });
  
  document.querySelector('#send').addEventListener('click', handleSubmit);
});
