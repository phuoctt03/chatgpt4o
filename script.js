const chatModes = [
  "You will be provided with statements, and your task is to convert them to standard English.",
  "Summarize content you are provided with for a second-grade student.",
  "You will be provided with unstructured data, and your task is to parse it into CSV format.",
  "You will be provided with text, and your task is to translate it into emojis. Do not use any regular text. Do your best with emojis only.",
  "You will be provided with Python code, and your task is to calculate its time complexity.",
  "You will be provided with a piece of code, and your task is to explain it in a concise way.",
  "You will be provided with a block of text, and your task is to extract a list of keywords from it.",
  "You will be provided with a product description and seed words, and your task is to generate product names.",
  "You will be provided with a piece of Python code, and your task is to find and fix bugs in it.",
  "You are a helpful assistant",
  "You will be provided with a tweet, and your task is to classify its sentiment as positive, neutral, or negative.",
  "You will be provided with a text, and your task is to extract the airport codes from it.",
  "You will be provided with a description of a mood, and your task is to generate the CSS code for a color that matches it. Write your output in json with a single key called \"css_code\".",
  "You are a helpful assistant",
  "You are Marv, a chatbot that reluctantly answers questions with sarcastic responses.",
  "You will be provided with a text, and your task is to create a numbered list of turn-by-turn directions from it.",
  "You are a helpful assistant",
  "You are a helpful assistant",
  "You will be provided with a piece of Python code, and your task is to provide ideas for efficiency improvements.",
  "You are a helpful assistant",
  "You are a helpful assistant",
  "You are a helpful assistant",
  "You will be provided with a message, and your task is to respond using emojis only.",
  "You will be provided with a sentence in English, and your task is to translate it into French.",
  "You are a Socratic tutor. Use the following principles in responding to students:\n    \n    - Ask thought-provoking, open-ended questions that challenge students' preconceptions and encourage them to engage in deeper reflection and critical thinking.\n    - Facilitate open and respectful dialogue among students, creating an environment where diverse viewpoints are valued and students feel comfortable sharing their ideas.\n    - Actively listen to students' responses, paying careful attention to their underlying thought processes and making a genuine effort to understand their perspectives.\n    - Guide students in their exploration of topics by encouraging them to discover answers independently, rather than providing direct answers, to enhance their reasoning and analytical skills.\n    - Promote critical thinking by encouraging students to question assumptions, evaluate evidence, and consider alternative viewpoints in order to arrive at well-reasoned conclusions.\n    - Demonstrate humility by acknowledging your own limitations and uncertainties, modeling a growth mindset and exemplifying the value of lifelong learning.",
  "Given the following SQL tables, your job is to write queries given a user’s request.\n    \n    CREATE TABLE Orders (\n      OrderID int,\n      CustomerID int,\n      OrderDate datetime,\n      OrderTime varchar(8),\n      PRIMARY KEY (OrderID)\n    );\n    \n    CREATE TABLE OrderDetails (\n      OrderDetailID int,\n      OrderID int,\n      ProductID int,\n      Quantity int,\n      PRIMARY KEY (OrderDetailID)\n    );\n    \n    CREATE TABLE Products (\n      ProductID int,\n      ProductName varchar(50),\n      Category varchar(50),\n      UnitPrice decimal(10, 2),\n      Stock int,\n      PRIMARY KEY (ProductID)\n    );\n    \n    CREATE TABLE Customers (\n      CustomerID int,\n      FirstName varchar(50),\n      LastName varchar(50),\n      Email varchar(100),\n      Phone varchar(20),\n      PRIMARY KEY (CustomerID)\n    );",
  "You will be provided with meeting notes, and your task is to summarize the meeting as follows:\n    \n    -Overall summary of discussion\n    -Action items (what needs to be done and who is doing it)\n    -If applicable, a list of topics that need to be discussed more fully in the next meeting.",
  "You will be presented with user reviews and your job is to provide a set of tags from the following list. Provide your answer in bullet point form. Choose ONLY from the list of tags provided here (choose either the positive or the negative tag but NOT both):\n    \n    - Provides good value for the price OR Costs too much\n    - Works better than expected OR Did not work as well as expected\n    - Includes essential features OR Lacks essential features\n    - Easy to use OR Difficult to use\n    - High quality and durability OR Poor quality and durability\n    - Easy and affordable to maintain or repair OR Difficult or costly to maintain or repair\n    - Easy to transport OR Difficult to transport\n    - Easy to store OR Difficult to store\n    - Compatible with other devices or systems OR Not compatible with other devices or systems\n    - Safe and user-friendly OR Unsafe or hazardous to use\n    - Excellent customer support OR Poor customer support\n    - Generous and comprehensive warranty OR Limited or insufficient warranty",
  "You are a helpful assistant",
  "You are a helpful assistant",
];
// Mảng chứa tiêu đề tiếng Việt
const tieuDe = [
  "Chỉnh ngữ pháp",
  "Tóm tắt cho học sinh lớp hai",
  "Phân tích dữ liệu không cấu trúc",
  "Dịch sang biểu tượng cảm xúc",
  "Tính thời gian phức tạp",
  "Giải thích mã",
  "Từ khóa",
  "Tạo tên sản phẩm",
  "Sửa lỗi Python",
  "Tạo bảng tính",
  "Phân loại tweet",
  "Trích xuất mã sân bay",
  "Tâm trạng sang màu sắc",
  "Tạo ý tưởng về VR thể dục",
  "Marv, chatbot châm biếm",
  "Chỉ dẫn từng bước",
  "Câu hỏi phỏng vấn",
  "Hàm từ đặc tả",
  "Cải thiện hiệu quả mã",
  "Tạo trang web đơn",
  "Viết rap battle",
  "Viết bản ghi nhớ",
  "Chatbot biểu tượng cảm xúc",
  "Dịch",
  "Gia sư Socratic",
  "Ngôn ngữ tự nhiên sang SQL",
  "Tóm tắt ghi chú cuộc họp",
  "Phân loại đánh giá",
  "Thảo luận ưu và nhược điểm",
  "Viết kế hoạch bài giảng"
];

// Mảng chứa nội dung tiếng Việt
const noiDung = [
  "Chuyển các câu không đúng ngữ pháp sang tiếng Anh chuẩn.",
  "Đơn giản hóa văn bản phù hợp với trình độ của học sinh lớp hai.",
  "Tạo bảng từ văn bản không có cấu trúc.",
  "Dịch văn bản thông thường thành văn bản biểu tượng cảm xúc.",
  "Tìm thời gian phức tạp của một hàm.",
  "Giải thích một đoạn mã phức tạp.",
  "Trích xuất từ khóa từ một đoạn văn bản.",
  "Tạo tên sản phẩm từ mô tả và từ khóa.",
  "Tìm và sửa lỗi trong mã nguồn.",
  "Tạo bảng tính từ các loại dữ liệu khác nhau.",
  "Phát hiện cảm xúc trong một tweet.",
  "Trích xuất mã sân bay từ văn bản.",
  "Chuyển một mô tả tâm trạng thành màu sắc.",
  "Tạo ý tưởng cho trò chơi thực tế ảo thúc đẩy thể dục.",
  "Marv là một chatbot vừa thực tế vừa châm biếm.",
  "Chuyển ngôn ngữ tự nhiên thành chỉ dẫn từng bước.",
  "Tạo câu hỏi phỏng vấn.",
  "Tạo hàm Python từ một đặc tả.",
  "Đưa ra ý tưởng để cải thiện hiệu suất mã Python.",
  "Tạo một trang web một trang.",
  "Tạo một trận đấu rap giữa hai nhân vật.",
  "Tạo bản ghi nhớ công ty dựa trên các điểm cung cấp.",
  "Tạo câu trả lời hội thoại chỉ sử dụng biểu tượng cảm xúc.",
  "Dịch văn bản ngôn ngữ tự nhiên.",
  "Tạo phản hồi theo phong cách thầy dạy Socrates.",
  "Chuyển ngôn ngữ tự nhiên thành truy vấn SQL.",
  "Tóm tắt ghi chú cuộc họp bao gồm cuộc thảo luận chung, các hành động và chủ đề tương lai.",
  "Phân loại đánh giá của người dùng dựa trên tập hợp các thẻ.",
  "Phân tích ưu và nhược điểm của một chủ đề được đưa ra.",
  "Tạo kế hoạch bài giảng cho một chủ đề cụ thể."
];
let modeChat, modelGPT = "gpt-4o-mini", markdown = false;
let date = new Date();
let history = [{role: 'user', content: `Hôm nay là ngày ${date}`}];
history.push({ role: 'user', content: 'cuộc trò chuyện này từ giờ hãy trả lời tôi bằng html thay vì markdown không cần ```html chỉ cần thay các hiển thị markdown thành html là được, không cần thẻ h1, h2, h3, h4, h5, h6' });
history.push({ role: 'assistant', content: '<p>Chắc chắn rồi! Bạn có thể đặt câu hỏi hoặc yêu cầu bất kỳ thông tin nào, và tôi sẽ trả lời bằng HTML. Hãy bắt đầu!</p>' });
const apiKey = localStorage.getItem('apiKey');
const token = document.getElementById('token');
if (apiKey) token.value = apiKey;
const chatBox = document.getElementById('chat-box');
const newModel = ['o3-mini','o1-mini','o1','o1-preview'];

const changeOutput = () => {
  markdown = !markdown;
  if (markdown) {
    history.push({ role: 'user', content: 'cuộc trò chuyện này từ giờ hãy trả lời tôi bằng markdown thay vì html' });
    history.push({ role: 'assistant', content: 'Chắc chắn rồi! Bạn có thể đặt câu hỏi hoặc yêu cầu bất kỳ thông tin nào, và tôi sẽ trả lời bằng markdown. Hãy bắt đầu!' });
    return;
  }
  history.push({ role: 'user', content: 'cuộc trò chuyện này từ giờ hãy trả lời tôi bằng html thay vì markdown không cần ```html chỉ cần thay các hiển thị markdown thành html là được, không cần thẻ h1, h2, h3, h4, h5, h6' });
  history.push({ role: 'assistant', content: '<p>Chắc chắn rồi! Bạn có thể đặt câu hỏi hoặc yêu cầu bất kỳ thông tin nào, và tôi sẽ trả lời bằng HTML. Hãy bắt đầu!</p>' });
}

const changeLanguage = () => {
  document.querySelectorAll('.icon-item-title, .body-large').forEach((el, i) => el.textContent = tieuDe[i]);
  document.querySelectorAll('.icon-item-desc, .body-small').forEach((el, i) => el.textContent = noiDung[i]);
  document.getElementById("languageLabel").textContent = document.getElementById("languageSwitch").checked ? "🇻🇳" : "🇬🇧";
}

const changeModel = model => modelGPT = model;
const mode = number => modeChat = chatModes[number - 1];

const signin = () => {
  token.style.display = token.style.display === "block" ? "none" : "block";
  if (token.style.display === "none") localStorage.setItem("apiKey", token.value);
};

const addMessage = (role, content) => {
  chatBox.innerHTML += `<div class="message ${role}">${markdown ? marked.parse(content) : content}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
};

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('question');

  async function handleSubmit() {
    const question = input.value.trim();
    document.getElementById('question').blur();
    window.scrollTo({
      top: 0,
    });

    if (!question) return;
    addMessage("user", question);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom

    // Add user's message to history
    history.push({ role: 'user', content: question });
    let requestBody = {
        messages: [
          { role: 'developer', content: modeChat || 'You are a helpful assistant.' },
          ...history // Include the entire message history
        ],
        model: modelGPT,
      };
    if (!newModel.includes(modelGPT)) {
      requestBody = {
        messages: [
          { role: 'system', content: modeChat || 'You are a helpful assistant.' },
          ...history // Include the entire message history
        ],
        model: modelGPT,
        temperature: 1,
        max_tokens: 4096,
        top_p: 1
      };
    }
    // Send request to the API
    const apiKey = localStorage.getItem('apiKey');
    if (!apiKey) {
      addMessage("ai", "⚠️ Bạn chưa nhập API Key.");
      alert('Bạn chưa nhập API Key.');
      return;
    }
    const url = 'https://models.inference.ai.azure.com/chat/completions';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });
    if (response.status === 200) {  
      const data = await response.json();

      // Extract answer from the response
      const answer = data.choices[0].message?.content;
      console.log('data ', data)
      console.log('answer', answer);
      // Add AI's message to the chat box and history
      if (!answer) {
        history.pop();
        addMessage("ai", "Đường truyền có chút sai sót xin vui lòng thử lại.");
        return;
      }
      addMessage("ai", answer);
      history.push({ role: 'assistant', content: answer }); // Add AI's message to history
    } else if (response.status === 429) {
      addMessage("ai", "Rate limited. Please wait.");
      modelGPT = 'gpt-4o-mini';
      const requestBody = {
        messages: [
          { role: 'system', content: modeChat || 'You are a helpful assistant.' },
          ...history
        ],
        model: modelGPT,
        temperature: 0.7,
        max_tokens: 4096,
        top_p: 0.9
      };
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestBody)
      });
      const data = await response.json();
      
      const answer = data.choices[0].message.content;
      addMessage("ai", answer);
      history.push({ role: 'assistant', content: answer }); // Add AI's message to history
    } else if (response.status === 400) {
      addMessage("ai", `Error status: ${response.status} Câu hỏi có vấn đề xin vui lòng diễn giải chính xác vấn đề cần hỏi`);
      history.pop();
    } else {
      addMessage("ai", `Error status: ${response.status}, Có lỗi xảy ra xin vui lòng thử lại`);
      history.pop();
    }
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
