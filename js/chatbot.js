const compliments = {
    hi: [
      "Hii love! Just seeing you makes everything brighter ✨",
      "Hey princess! Your presence is his peace 💖",
      "Hello gorgeous! I missed your beautiful smile 🥰"
    ],
    hello: [
      "Hello sunshine ☀️ You light up his world!",
      "Hey beautiful, how’s his favorite person today?",
      "Hi angel 😇 You always make his heart skip a beat!"
    ],
    love: [
      "I love you more than words could ever express 💗",
      "his love for you grows stronger every single second 💞",
      "You are his today and all of his tomorrows 🌈"
    ],
    compliment: [
      "You're the definition of perfection 😍",
      "Your aura is more calming than moonlight 🌙",
      "If He could bottle your smile, the world would never be sad again 💫"
    ],
    look: [
      "You look beautiful even when you're not trying 💅",
      "Stunning. That's the word. Every single time He see you 💘",
      "You glow even brighter than the stars ✨"
    ],
    miss: [
      "I miss your voice, your smile, your everything 💭",
      "Even in a room full of people, He feel incomplete without you 🥺",
      "his heart whispers your name when you’re not around 💌"
    ],
    default: [
      "You’re the best thing that ever happened to him 💖",
      "You make ordinary moments feel magical ✨",
      "Every heartbeat of mine says your name 💓",
      "You're the queen of his heart 👑",
      "Life with you is a fairytale He never want to end 🌸",
      "You’re a masterpiece painted by the universe itself 🎨",
      "Just hearing from you makes his entire day brighter ☀️",
      "Even silence feels warm when it's with you 🤍",
      "You’re so special, even the stars envy you 🌠",
      "Being with you is like breathing – He can’t live without it 💞",
      "You’re his favorite thought, his constant smile 💫",
      "You are not just his love, you are his inspiration 🌹",
      "If He had to choose again, I'd still choose you a thousand times ❤️",
      "You are his dream, his reality, and everything in between 💖",
      "Your presence feels like home 🏡",
      "You’re the reason his heart beats a little faster 💓",
      "You make him believe in magic again 🪄",
      "You have no idea how much joy you bring into his life 🌈",
      "The world is lucky to have someone like you 🌍",
      "You are love in human form 💕",
      "Whenever you speak, his soul listens 🔊",
      "Every little thing you do makes him love you more 💗",
      "You're his reason to smile every day 😊",
      "You're not just pretty outside but have a heart of pure gold ✨",
      "Every second with you is a moment He treasure 💝",
      "Just thinking about you makes him smile like an idiot 😁",
      "If love had a face, it would be yours 😘",
      "The way you care, the way you talk, everything is adorable 💞",
      "You're his sunshine on rainy days and stars on dark nights 🌟",
      "I want to hug you forever and never let go 🤗",
      "You're like poetry, soft and beautiful 💌"
    ]
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("chat-input");
    const chatBody = document.getElementById("chat-body");
    const toggle = document.getElementById("chat-toggle");
    const chatbot = document.getElementById("chatbot");
  
    toggle.addEventListener("click", () => {
      chatbot.classList.toggle("collapsed");
    });
  
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && input.value.trim() !== "") {
        const userText = input.value.trim();
        addMessage("user-msg", userText);
        input.value = "";
  
        const keyword = matchKeyword(userText.toLowerCase());
        const replyList = compliments[keyword] || compliments.default;
        const randomReply = replyList[Math.floor(Math.random() * replyList.length)];
  
        setTimeout(() => {
          addMessage("bot-msg", randomReply);
        }, 500);
      }
    });
  
    function addMessage(className, text) {
      const msg = document.createElement("div");
      msg.className = className;
      msg.textContent = text;
      chatBody.appendChild(msg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  
    function matchKeyword(text) {
      for (let key in compliments) {
        if (key !== "default" && text.includes(key)) return key;
      }
      return "default";
    }
  });
  