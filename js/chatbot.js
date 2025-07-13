window.addEventListener("load", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const closeChatbot = document.getElementById("close-chatbot");
  const chatMessages = document.getElementById("chat-messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");
  const driftieTooltip = document.getElementById("driftie-tooltip");

  let isChatbotOpen = false;
  let conversationHistory = [];

  const defaultSuggestions = [
    { text: "📦 Productos", action: "Ver productos" },
    { text: "📞 Contacto", action: "Contactar atención" },
    { text: "🎉 Promociones", action: "Ver promociones" },
    { text: "🚚 Envíos", action: "Consultar envío" },
    { text: "💳 Pago", action: "Formas de pago" },
    { text: "🍭 Sabores", action: "Recomiéndame un sabor" },
  ];

  function sugerenciasFiltradas(excluir) {
    return defaultSuggestions
      .filter((s) => s.action !== excluir)
      .concat({ text: "🔁 Volver al inicio", action: "inicio" });
  }

  const respuestas = {
    saludo: {
      text: "¡Hola! 👋 Soy Driftie, tu asistente de Drift & Cloud. ¿En qué puedo ayudarte hoy?",
      suggestions: [...defaultSuggestions]
    },
    productos: {
      text: "🛍️ Puedes ver todos nuestros productos disponibles aquí:<br><br><a href='productos.html'>🔗 Ir a la tienda</a><br><br>¿Quieres recomendaciones de sabores?",
      suggestions: sugerenciasFiltradas("Ver productos")
    },
    promociones: {
      text: `
        <b>🎁 Promociones activas:</b><br><br>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div>🔸 <b><a href="producto.html?id=lifepod-pink-lemonade">Lifepod Pink Lemonade</a></b> — <s>S/110</s> <span style="color:#20c997"><b>S/80</b></span></div>
          <div>🔸 <b><a href="producto.html?id=oxbar-mango-ice">Oxbar Mango Ice</a></b> — <s>S/120</s> <span style="color:#20c997"><b>S/80</b></span></div>
        </div>
        <br><i>🎯 Promos válidas hasta agotar stock</i>
      `,
      suggestions: sugerenciasFiltradas("Ver promociones")
    },
    envio: {
      text: "🚚 Hacemos envíos a:<br>• Piura<br>• Castilla<br>• Veintiséis de Octubre<br><br>🕒 Entrega en 24-48h<br>🛒 ¡Gratis a todo Piura y Castilla!",
      suggestions: sugerenciasFiltradas("Consultar envío")
    },
    pagos: {
      text: "💳 Métodos de pago:<br><br>• Yape / Plin<br>• Transferencia BCP<br>• Efectivo contra entrega<br><br>¿Cómo deseas pagar?",
      suggestions: sugerenciasFiltradas("Formas de pago")
    },
    sabores: {
      text: "🍭 Sabores recomendados:<br><br>• Mango Ice 🥭❄️<br>• Blue Razz 🍇<br>• Pink Lemonade 🍋<br>• Mojito 🍃<br>• Energy Drink ⚡<br><br>¿Quieres que te recomiende uno especial?",
      suggestions: [
        { text: "🌴 Algo frutal", action: "Recomiéndame un sabor frutal" },
        { text: "❄️ Algo refrescante", action: "Recomiéndame algo mentolado" },
        { text: "✨ Sabor especial", action: "Recomiéndame algo diferente" },
        { text: "🔁 Volver al inicio", action: "inicio" }
      ]
    },
    frutal: {
      text: "🍍 Te recomiendo Mango Ice o Blue Razz. Son frutales, dulces y con buen golpe de garganta.",
      suggestions: sugerenciasFiltradas("Recomiéndame un sabor")
    },
    mentolado: {
      text: "❄️ Prueba Peach Ice o Mint. Súper refrescantes para climas calurosos.",
      suggestions: sugerenciasFiltradas("Recomiéndame un sabor")
    },
    especial: {
      text: "✨ Puedes probar Energy Drink o Mojito. Son sabores diferentes y muy bien recibidos por nuestros clientes.",
      suggestions: sugerenciasFiltradas("Recomiéndame un sabor")
    },
    garantia: {
      text: "🛡️ Ofrecemos garantía de 7 días por fallas de fábrica. Solo conserva el empaque original y notifícanos con fotos o video.",
      suggestions: sugerenciasFiltradas("Garantía")
    },
    contacto: {
      text: "📞 Puedes contactarnos:<br><br>• WhatsApp: <a href='https://wa.me/51976404496' target='_blank'>+51 976 404 496</a><br>• Instagram: <a href='https://instagram.com/drift_and_cloud_smoke' target='_blank'>@drift_and_cloud_smoke</a>",
      suggestions: sugerenciasFiltradas("Contactar atención")
    },
    inicio: () => respuestas.saludo,
    despedida: {
      text: "👋 ¡Gracias por visitar Drift & Cloud! Vuelve cuando quieras. 💨",
      suggestions: []
    },
    default: {
      text: "🤔 No entendí eso. Pero aquí tienes opciones para continuar:",
      suggestions: [...defaultSuggestions, { text: "🔁 Volver al inicio", action: "inicio" }]
    }
  };


  chatbotToggle.addEventListener("click", toggleChatbot);
  closeChatbot.addEventListener("click", toggleChatbot);
  document.addEventListener("click", (e) => {
    if (isChatbotOpen && !chatbotContainer.contains(e.target) && !chatbotToggle.contains(e.target)) {
      toggleChatbot();
    }
  });

  chatbotToggle.addEventListener("mouseenter", () => {
    driftieTooltip.style.opacity = "1";
  });
  chatbotToggle.addEventListener("mouseleave", () => {
    driftieTooltip.style.opacity = "0";
  });

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSend();
  });
  sendButton.addEventListener("click", handleSend);

  function toggleChatbot() {
    isChatbotOpen = !isChatbotOpen;
    chatbotContainer.style.display = isChatbotOpen ? "flex" : "none";
    chatbotContainer.setAttribute("data-state", isChatbotOpen ? "open" : "closed");
    if (isChatbotOpen && chatMessages.children.length === 0) {
      showMessage(respuestas.saludo);
    }
  }

  async function handleSend() {
    const msg = userInput.value.trim();
    if (!msg) return;
    addMessage(msg, "user");
    userInput.value = "";

    const respuesta = getRespuesta(msg);
    await delay(300);
    showMessage(respuesta);
  }

    function getRespuesta(msg) {
    const txt = msg.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Elimina acentos para mejor matching
    
    // Coincidencias para acciones de botones y mensajes de usuario
    if (/hola|buenas|hi|saludo/.test(txt)) return respuestas.saludo;
    if (/producto|vape|modelo|ver productos/.test(txt)) return respuestas.productos;
    if (/promo|oferta|descuento|ver promociones/.test(txt)) return respuestas.promociones;
    if (/env[ií]o|entrega|zona|consultar env[ií]o/.test(txt)) return respuestas.envio;
    if (/pago|plin|yape|banco|formas de pago/.test(txt)) return respuestas.pagos;
    if (/sabor|sabores|recom[ií]endame un sabor/.test(txt)) return respuestas.sabores;
    if (/frutal|recom[ií]endame un sabor frutal/.test(txt)) return respuestas.frutal;
    if (/mentolado|refrescante|recom[ií]endame algo mentolado/.test(txt)) return respuestas.mentolado;
    if (/especial|diferente|recom[ií]endame algo diferente/.test(txt)) return respuestas.especial;
    if (/garant[ií]a|defecto/.test(txt)) return respuestas.garantia;
    if (/contacto|whatsapp|llamar|contactar atenc[ií]on/.test(txt)) return respuestas.contacto;
    if (/inicio|empezar|volver/.test(txt)) return respuestas.inicio();
    if (/chao|chau|adios|bye|gracias/.test(txt)) return respuestas.despedida;
    return respuestas.default;
  }

  function addMessage(text, sender) {
    const el = document.createElement("div");
    el.className = `message ${sender}-message`;
    el.textContent = text;
    chatMessages.appendChild(el);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showMessage(response) {
    const el = document.createElement("div");
    el.className = "message bot-message";
    const content = document.createElement("div");
    content.className = "message-content";
    content.innerHTML = response.text;

    if (response.suggestions?.length) {
      const chipWrap = document.createElement("div");
      chipWrap.className = "suggestion-chips";

      response.suggestions.forEach((sug) => {
        const chip = document.createElement("div");
        chip.className = "suggestion-chip";
        chip.innerHTML = sug.text;
        chip.addEventListener("click", () => {
          addMessage(sug.action, "user");
          const respuesta = getRespuesta(sug.action);
          setTimeout(() => showMessage(respuesta), 300);
        });
        chipWrap.appendChild(chip);
      });

      content.appendChild(chipWrap);
    }

    el.appendChild(content);
    chatMessages.appendChild(el);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
});
