const domModule = (() => {
  const btnContainer = document.querySelector(".btn-container");
  const calcDisplay = document.querySelector(".calc-display");

  btnContainer.addEventListener("click", btnClickHandler);

  function btnClickHandler(e) {
    if (e.target.tagName === "BUTTON") {
      calcModule.processValue(e.target.value);
    }
  }

  function updateDisplay(val) {
    calcDisplay.value = val;
  }

  return {
    updateDisplay,
  };
})();

const calcModule = (() => {
  let buf = "";
  let mem = "";
  let sym = "";

  function processValue(val) {
    if (/[0-9]{1}/.test(val)) {
      processNum(val);
    } else if (/[+|\-|*|/|\.|=]{1}/.test(val)) {
      processSym(val);
    }
  }

  function processNum(num) {
    if (mem && !sym && !buf) {
      mem = mem !== "0" ? (mem += num) : num;
    } else {
      buf = buf !== "0" ? (buf += num) : num;
    }
    domModule.updateDisplay(mem + sym + buf);
  }

  function processSym(symParam) {
    switch (symParam) {
      case "=":
        if (mem && sym && buf) {
          mem = calcResult(mem, sym, buf);
          buf = "";
          sym = "";
        }
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        if (!sym && !mem) {
          mem = buf || "0";
          sym = symParam;
          buf = "";
        } else {
          if (mem && buf && sym) {
            mem = calcResult(mem, sym, buf); // calc any queued up operation
            buf = "";
            sym = "";
          }
          sym = symParam; // THEN, update sym
        }
        break;

      case ".":
        if (mem && !sym && !buf) {
          if (!mem.includes(".")) {
            mem = mem !== "" ? mem + "." : "0.";
          }
        } else {
          if (!buf.includes(".")) {
            buf = buf !== "" ? buf + "." : "0.";
          }
        }
        break;
    }

    domModule.updateDisplay(mem + sym + buf);
  }

  function calcResult(mem, sym, buf) {
    switch (sym) {
      case "+":
        return String(parseFloat(mem) + parseFloat(buf));
      case "-":
        return String(parseFloat(mem) - parseFloat(buf));
      case "*":
        return String(parseFloat(mem) * parseFloat(buf));
      case "/":
        return String(parseFloat(mem) / parseFloat(buf));
    }
  }

  return {
    processValue,
  };
})();
