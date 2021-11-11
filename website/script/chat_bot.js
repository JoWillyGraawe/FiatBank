document.addEventListener("DOMContentLoaded", () => {

    const inputField = document.getElementById("chat_input")
    inputField.addEventListener("keydown", function(e) {
      if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        composeOutput(input);
      }
    });

    // Correlates keywords from 'queries' array with a reply in 'replies' array.
    function interpretInput(string) {
        let reply;
        for (let i = 0; i < queries.length; i++) {
            for (let j = 0; j < queries[i].length; j++) {
                if (string.search(queries[i][j]) != -1) {
                    reply = replies[i];
                }
            }
        }
    return reply;
    };

    // Calls the interpetInput function and creates a text response, before passing it to the addChatEntry function.
    function composeOutput(input) {
        let cleanedText = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
        
        var response = interpretInput(cleanedText);
       
        addChatEntry (input, response);
      };


    // Creates appropriate HTML char reply elements.
    function addChatEntry(input, reply) {
        const chatContainer = document.getElementById("chat_window");
        
        let userDiv = document.createElement("div");
        userDiv.id = "user";
        userDiv.className = "chat_right";
        userDiv.innerHTML = `${input}`;
        chatContainer.appendChild(userDiv);
       
        let botDiv = document.createElement("div");
        botDiv.id = "bot";
        botDiv.className = "chat_left";
        botDiv.innerText = "Typing...";
        chatContainer.appendChild(botDiv);

        setTimeout(() => {
            botDiv.innerText = reply;
          }, 1000);

        };


    const queries = [
        ["hello", "hi", "good morning", "good afternoon"],       //0
        ["loan", "credit", "mortgage"],                     //1
        ["savings", "save", "money", "interest"],              //2
        ["insurance", "insure", "health", "car"],           //3
        ["fiatbank", "fiat", "company"],                    //4
        ["contact", "employee", "speak", "call"]            //5
    ];

    const replies = [
        ["Hello."],     //0
        ["You might be looking for our Loans page. You can find it here."],             //1
        ["You might be looking for our Savings page. You can find it here."],             //2
        ["You might be looking for our Insurance page. You can find it here."],             //3
        ["You can find out more about FiatBank by visiting the 'About Us' page, found here."],             //4
        ["If you want to speak with one of our consultants, you can find their contact information on our Contact page, here."],  //5
        ["I'm sorry, I don't understand. Please rephrase and try again."]               //6
    ];

  });


