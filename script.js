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
  "Viết kế hoạch bài giảng",
]

// Mảng chứa nội dung tiếng Việt
const noiDung = [
  "Chuyển các câu không đúng ngữ pháp sang tiếng Anh chuẩn.",
  "Đơn giản hóa văn bản phù hợp với trình độ của học sinh lớp hai.",
  "Tạo bảng từ văn bản không cấu trúc.",
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
  "Viết rap battle",
  "Viết bản ghi nhớ công ty dựa trên các điểm cung cấp.",
  "Tạo câu trả lời hội thoại chỉ sử dụng biểu tượng cảm xúc.",
  "Dịch văn bản ngôn ngữ tự nhiên.",
  "Tạo phản hồi theo phong cách thầy dạy Socrates.",
  "Chuyển ngôn ngữ tự nhiên thành truy vấn SQL.",
  "Tóm tắt ghi chú cuộc họp bao gồm cuộc thảo luận chung, các hành động và chủ đề tương lai.",
  "Phân loại đánh giá của người dùng dựa trên tập hợp các thẻ.",
  "Phân tích ưu và nhược điểm của một chủ đề được đưa ra.",
  "Tạo kế hoạch bài giảng cho một chủ đề cụ thể.",
]

// Mảng chứa tiêu đề tiếng Anh
const englishTitles = [
  "Grammar correction",
  "Summarize for a 2nd grader",
  "Parse unstructured data",
  "Emoji Translation",
  "Calculate time complexity",
  "Explain code",
  "Keywords",
  "Product name generator",
  "Python bug fixer",
  "Spreadsheet creator",
  "Tweet classifier",
  "Airport code extractor",
  "Mood to color",
  "VR fitness idea generator",
  "Marv the sarcastic chat bot",
  "Turn by turn directions",
  "Interview questions",
  "Function from specification",
  "Improve code efficiency",
  "Single page website creator",
  "Rap battle writer",
  "Memo writer",
  "Emoji chatbot",
  "Translation",
  "Socratic tutor",
  "Natural language to SQL",
  "Meeting notes summarizer",
  "Review classifier",
  "Pro and con discusser",
  "Lesson plan writer",
]

// Mảng chứa nội dung tiếng Anh
const englishDescriptions = [
  "Convert ungrammatical statements into standard English.",
  "Simplify text to a level appropriate for a second-grade student.",
  "Create tables from unstructured text.",
  "Translate regular text into emoji text.",
  "Find the time complexity of a function.",
  "Explain a complicated piece of code.",
  "Extract keywords from a block of text.",
  "Generate product names from a description and seed words.",
  "Find and fix bugs in source code.",
  "Create spreadsheets of various kinds of data.",
  "Detect sentiment in a tweet.",
  "Extract airport codes from text.",
  "Turn a text description into a color.",
  "Generate ideas for fitness promoting virtual reality games.",
  "Marv is a factual chatbot that is also sarcastic.",
  "Turn natural language to turn-by-turn directions.",
  "Create interview questions.",
  "Create a Python function from a specification.",
  "Provide ideas for efficiency improvements to Python code.",
  "Create a single page website.",
  "Generate a rap battle between two characters.",
  "Generate a company memo based on provided points.",
  "Generate conversational replies using emojis only.",
  "Translate natural language text.",
  "Generate responses as a Socratic tutor.",
  "Convert natural language into SQL queries.",
  "Summarize meeting notes including overall discussion, action items, and future topics.",
  "Classify user reviews based on a set of tags.",
  "Analyze the pros and cons of a given topic.",
  "Generate a lesson plan for a specific topic.",
]

let modeChat,
  modelGPT = "gpt-4o-mini",
  markdown = false
const date = new Date()
const history = [{ role: "user", content: `Hôm nay là ngày ${date}` }]
history.push({
  role: "user",
  content:
    "cuộc trò chuyện này từ giờ hãy trả lời tôi bằng html thay vì markdown không cần ```html chỉ cần thay các hiển thị markdown thành html là được, không cần thẻ h1, h2, h3, h4, h5, h6",
})
history.push({
  role: "assistant",
  content:
    "<p>Chắc chắn rồi! Bạn có thể đặt câu hỏi hoặc yêu cầu bất kỳ thông tin nào, và tôi sẽ trả lời bằng HTML. Hãy bắt đầu!</p>",
})
const apiKey = localStorage.getItem("apiKey")
const token = document.getElementById("token")
if (apiKey) token.value = apiKey
const chatBox = document.getElementById("chat-box")
const newModel = ["o3-mini", "o1-mini", "o1", "o1-preview"]

// Zoom functionality
let zoomLevel = 100
const zoomStep = 10
const minZoom = 70
const maxZoom = 200

const updateZoom = () => {
  document.getElementById("zoom-level").textContent = `${zoomLevel}%`
  chatBox.style.fontSize = `${zoomLevel}%`

  // Update all existing messages with the new zoom level
  const messages = document.querySelectorAll(".message")
  messages.forEach((message) => {
    message.style.fontSize = `${zoomLevel}%`
  })

  // Save zoom level to localStorage
  localStorage.setItem("chatZoomLevel", zoomLevel)
}

// Fullscreen functionality
const toggleFullscreen = () => {
  const chatContainer = document.getElementById("chat-container")
  const expandIcon = document.querySelector(".expand-icon")
  const collapseIcon = document.querySelector(".collapse-icon")

  if (chatContainer.classList.contains("fullscreen-mode")) {
    // Exit fullscreen
    chatContainer.classList.remove("fullscreen-mode")
    expandIcon.style.display = "block"
    collapseIcon.style.display = "none"
  } else {
    // Enter fullscreen
    chatContainer.classList.add("fullscreen-mode")
    expandIcon.style.display = "none"
    collapseIcon.style.display = "block"
  }

  // Scroll to bottom after transition
  setTimeout(() => {
    chatBox.scrollTop = chatBox.scrollHeight
  }, 300)
}

// Image handling
let uploadedImages = []

const handleImageUpload = (event) => {
  const files = event.target.files
  if (!files || files.length === 0) return

  // Process each file
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const reader = new FileReader()

    reader.onload = (e) => {
      const imageData = e.target.result
      uploadedImages.push(imageData)
      addImagePreview(imageData, uploadedImages.length - 1)
    }

    reader.readAsDataURL(file)
  }

  // Reset the file input to allow selecting the same files again
  event.target.value = ""
}

const addImagePreview = (imageData, index) => {
  const previewContainer = document.getElementById("images-preview-container")

  // Create preview element
  const previewElement = document.createElement("div")
  previewElement.className = "image-preview"
  previewElement.dataset.index = index

  // Create image element
  const imageElement = document.createElement("img")
  imageElement.src = imageData
  imageElement.alt = "Image preview"

  // Create remove button
  const removeButton = document.createElement("div")
  removeButton.className = "remove-image"
  removeButton.innerHTML = "×"
  removeButton.onclick = () => removeImagePreview(index)

  // Append elements
  previewElement.appendChild(imageElement)
  previewElement.appendChild(removeButton)
  previewContainer.appendChild(previewElement)

  // Show the container if it was hidden
  previewContainer.style.display = "flex"
}

const removeImagePreview = (index) => {
  // Remove from array
  uploadedImages.splice(index, 0, null) // Replace with null to maintain indices

  // Remove from DOM
  const previewElement = document.querySelector(`.image-preview[data-index="${index}"]`)
  if (previewElement) {
    previewElement.remove()
  }

  // Reindex remaining previews
  reindexPreviews()

  // Hide container if no images left
  const previewContainer = document.getElementById("images-preview-container")
  if (!document.querySelector(".image-preview")) {
    previewContainer.style.display = "none"
  }
}

const reindexPreviews = () => {
  // Remove null values and reindex
  uploadedImages = uploadedImages.filter((img) => img !== null)

  // Update DOM elements
  const previews = document.querySelectorAll(".image-preview")
  previews.forEach((preview, i) => {
    preview.dataset.index = i
  })
}

const addImageMessage = (role, imageUrl) => {
  const imageElement = document.createElement("img")
  imageElement.src = imageUrl
  imageElement.className = "message-image"
  imageElement.alt = "Uploaded image"

  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${role}`
  messageDiv.style.fontSize = `${zoomLevel}%`
  messageDiv.appendChild(imageElement)

  chatBox.appendChild(messageDiv)
  chatBox.scrollTop = chatBox.scrollHeight
}

const zoomIn = () => {
  if (zoomLevel < maxZoom) {
    zoomLevel += zoomStep
    updateZoom()
  }
}

const zoomOut = () => {
  if (zoomLevel > minZoom) {
    zoomLevel -= zoomStep
    updateZoom()
  }
}

const resetZoom = () => {
  zoomLevel = 100
  updateZoom()
}

const changeOutput = () => {
  markdown = !markdown
  if (markdown) {
    history.push({ role: "user", content: "cuộc trò chuyện này từ giờ hãy trả lời tôi bằng markdown thay vì html" })
    history.push({ role: 'assistant', content: 'Chắc chắn rồi! Bạn có thể đặt câu hỏi hoặc yêu cầu bất kỳ thông tin nào, và tôi sẽ trả lời bằng markdown. Hãy bắt đầu!' });
    return
  }
  history.push({
    role: "user",
    content:
      "cuộc trò chuyện này từ giờ hãy trả lời tôi bằng html thay vì markdown không cần ```html chỉ cần thay các hiển thị markdown thành html là được, không cần thẻ h1, h2, h3, h4, h5, h6",
  })
  history.push({
    role: "assistant",
    content:
      "<p>Chắc chắn rồi! Bạn có thể đặt câu hỏi hoặc yêu cầu bất kỳ thông tin nào, và tôi sẽ trả lời bằng HTML. Hãy bắt đầu!</p>",
  })
}

const changeLanguage = () => {
  const isVietnamese = document.getElementById("languageSwitch").checked
  const titles = document.querySelectorAll(".icon-item-title, .body-large")
  const descriptions = document.querySelectorAll(".icon-item-desc, .body-small")

  if (isVietnamese) {
    // Switch to Vietnamese
    titles.forEach((el, i) => {
      if (i < tieuDe.length) el.textContent = tieuDe[i]
    })
    descriptions.forEach((el, i) => {
      if (i < noiDung.length) el.textContent = noiDung[i]
    })
    document.getElementById("languageLabel").textContent = "🇻🇳"
  } else {
    // Switch to English
    titles.forEach((el, i) => {
      if (i < englishTitles.length) el.textContent = englishTitles[i]
    })
    descriptions.forEach((el, i) => {
      if (i < englishDescriptions.length) el.textContent = englishDescriptions[i]
    })
    document.getElementById("languageLabel").textContent = "🇬🇧"
  }
}

const changeModel = (model) => (modelGPT = model)

// Initialize chatModes array if not already defined
if (typeof chatModes === "undefined") {
  window.chatModes = [
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
    'You will be provided with a description of a mood, and your task is to generate the CSS code for a color that matches it. Write your output in json with a single key called "css_code".',
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
    "You are a Socratic tutor. Use the following principles in responding to students.",
    "Given the following SQL tables, your job is to write queries given a user's request.",
    "You will be provided with meeting notes, and your task is to summarize the meeting.",
    "You will be presented with user reviews and your job is to provide a set of tags from the following list.",
    "You are a helpful assistant",
    "You are a helpful assistant",
  ]
}

const mode = (number) => (modeChat = chatModes[number - 1])

const signin = () => {
  token.style.display = token.style.display === "block" ? "none" : "block"
  if (token.style.display === "none") localStorage.setItem("apiKey", token.value)
}

const addMessage = (role, content) => {
  chatBox.innerHTML += `<div class="message ${role}" style="font-size: ${zoomLevel}%">${markdown ? marked.parse(content) : content}</div>`
  chatBox.scrollTop = chatBox.scrollHeight
}

// Initialize marked if not already defined
if (typeof marked === "undefined") {
  window.marked = {
    parse: (text) => text,
  }
}

async function handleSubmit() {
  const input = document.getElementById("question")
  const question = input.value.trim()
  input.blur()
  window.scrollTo({
    top: 0,
  })

  if (!question && uploadedImages.length === 0) return

  // Add user's message to chat
  if (question) {
    addMessage("user", question)
  }

  // Add images to chat
  if (uploadedImages.length > 0) {
    uploadedImages.forEach((imageData) => {
      addImageMessage("user", imageData)
    })
  }

  input.value = ""
  chatBox.scrollTop = chatBox.scrollHeight

  // Prepare message content
  const messageContent = []

  if (question) {
    messageContent.push({ type: "text", text: question })
  }

  if (uploadedImages.length > 0) {
    uploadedImages.forEach((imageData) => {
      messageContent.push({
        type: "image_url",
        image_url: { url: imageData },
      })
    })
  }

  // Add to history - format depends on whether we have images
  if (uploadedImages.length > 0) {
    history.push({
      role: "user",
      content: messageContent,
    })
  } else {
    history.push({ role: "user", content: question })
  }

  // Prepare request body
  let requestBody = {
    messages: [
      { role: "developer", content: modeChat || "You are a helpful assistant that can analyze images." },
      ...history,
    ],
    model: modelGPT,
  }

  if (!newModel.includes(modelGPT)) {
    requestBody = {
      messages: [
        { role: "system", content: modeChat || "You are a helpful assistant that can analyze images." },
        ...history,
      ],
      model: modelGPT,
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
    }
  }

  // Send request to the API
  const apiKey = localStorage.getItem("apiKey")
  if (!apiKey) {
    addMessage("ai", "⚠️ Bạn chưa nhập API Key.")
    alert("Bạn chưa nhập API Key.")
    return
  }

  const url = "https://models.inference.ai.azure.com/chat/completions"
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestBody),
  })

  if (response.status === 200) {
    const data = await response.json()

    // Extract answer from the response
    const answer = data.choices[0].message?.content
    console.log("data ", data)
    console.log("answer", answer)

    // Add AI's message to the chat box and history
    if (!answer) {
      history.pop()
      addMessage("ai", "Đường truyền có chút sai sót xin vui lòng thử lại.")
      return
    }

    addMessage("ai", answer)
    history.push({ role: "assistant", content: answer }) // Add AI's message to history

    // Clear images after sending
    uploadedImages = []
    const previewContainer = document.getElementById("images-preview-container")
    previewContainer.innerHTML = ""
    previewContainer.style.display = "none"
  } else if (response.status === 429) {
    addMessage("ai", "Rate limited. Please wait.")
    modelGPT = "gpt-4o-mini"
    const requestBody = {
      messages: [
        { role: "system", content: modeChat || "You are a helpful assistant that can analyze images." },
        ...history,
      ],
      model: modelGPT,
      temperature: 0.7,
      max_tokens: 4096,
      top_p: 0.9,
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    })
    const data = await response.json()

    const answer = data.choices[0].message.content
    addMessage("ai", answer)
    history.push({ role: "assistant", content: answer }) // Add AI's message to history

    // Clear images after sending
    uploadedImages = []
    const previewContainer = document.getElementById("images-preview-container")
    previewContainer.innerHTML = ""
    previewContainer.style.display = "none"
  } else if (response.status === 400) {
    addMessage(
      "ai",
      `Error status: ${response.status} Câu hỏi có vấn đề xin vui lòng diễn giải chính xác vấn đề cần hỏi`,
    )
    history.pop()
  } else {
    addMessage("ai", `Error status: ${response.status}, Có lỗi xảy ra xin vui lòng thử lại`)
    history.pop()
  }

  chatBox.scrollTop = chatBox.scrollHeight // Scroll to bottom
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("question")
  const imagesPreviewContainer = document.getElementById("images-preview-container")

  // Initially hide the images preview container
  imagesPreviewContainer.style.display = "none"

  // Initialize zoom controls
  document.getElementById("zoom-in").addEventListener("click", zoomIn)
  document.getElementById("zoom-out").addEventListener("click", zoomOut)
  document.getElementById("zoom-reset").addEventListener("click", resetZoom)

  // Initialize fullscreen toggle
  document.getElementById("fullscreen-toggle").addEventListener("click", toggleFullscreen)

  // Initialize image upload
  document.getElementById("image-upload").addEventListener("change", handleImageUpload)

  // Load saved zoom level if exists
  const savedZoom = localStorage.getItem("chatZoomLevel")
  if (savedZoom) {
    zoomLevel = Number.parseInt(savedZoom)
    updateZoom()
  }

  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      handleSubmit()
    }
  })

  token.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      signin()
    }
  })

  document.querySelector("#send").addEventListener("click", handleSubmit)

  // Initialize language based on switch state
  changeLanguage()
})

// marked.js
window.marked = {
  parse: (text) => text,
}

// chatModes.js
window.chatModes = [
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
  'You will be provided with a description of a mood, and your task is to generate the CSS code for a color that matches it. Write your output in json with a single key called "css_code".',
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
  "You are a Socratic tutor. Use the following principles in responding to students.",
  "Given the following SQL tables, your job is to write queries given a user's request.",
  "You will be provided with meeting notes, and your task is to summarize the meeting.",
  "You will be presented with user reviews and your job is to provide a set of tags from the following list.",
  "You are a helpful assistant",
  "You are a helpful assistant",
]

