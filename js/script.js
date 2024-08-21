(function () {
  const encrypterApp = {
    validateText: function (text) {
      const regex = /^[a-z\s]*$/;
      return regex.test(text);
    },

    containsAccents: function (text) {
      const regex = /[\u0300-\u036f]/;
      return regex.test(text.normalize("NFD"));
    },

    encryptText: function () {
      let inputText = document.getElementById("inputText").value.trim();

      if (inputText === "") {
        alert("Por favor, ingrese un texto para encriptar.");
        return;
      }

      if (this.containsAccents(inputText)) {
        alert(
          "El texto no debe contener acentos. Por favor, ingrese solo letras minúsculas sin acentos."
        );
        return;
      }

      if (!this.validateText(inputText)) {
        alert("El texto debe contener solo letras minúsculas y espacios.");
        return;
      }

      const encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

      this.updateOutput(encryptedText);
      document.getElementById("inputText").value = "";
    },

    decryptText: function () {
      let inputText = document.getElementById("inputText").value.trim();

      if (inputText === "") {
        alert("Por favor, ingrese un texto para desencriptar.");
        return;
      }

      if (this.containsAccents(inputText)) {
        alert(
          "El texto no debe contener acentos. Por favor, ingrese solo letras minúsculas sin acentos."
        );
        return;
      }

      if (!this.validateText(inputText)) {
        alert("El texto debe contener solo letras minúsculas y espacios.");
        return;
      }

      const decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

      this.updateOutput(decryptedText);
      document.getElementById("inputText").value = "";
    },

    updateOutput: function (text) {
      const outputContainer = document.getElementById("outputContainer");
      outputContainer.innerHTML = "";

      const textElement = document.createElement("p");
      textElement.textContent = text;
      textElement.setAttribute("id", "outputText");

      const copyButton = document.createElement("button");
      copyButton.textContent = "Copiar";
      copyButton.classList.add("button-copiar");
      copyButton.onclick = function () {
        encrypterApp.copyToClipboard(textElement);
      };

      outputContainer.appendChild(textElement);
      outputContainer.appendChild(copyButton);
    },

    copyToClipboard: function (element) {
      const range = document.createRange();
      range.selectNodeContents(element);

      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand("copy");
    },
  };

  window.encrypterApp = encrypterApp;
})();
