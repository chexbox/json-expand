function expand(text) {
  let a = 0; //counter for which character you're on
  let newtext = "";
  let par = false;
  let indent = 0;
  let i = 0;
  while (a < text.length) {
    if (text[a] !== " ") {
      newtext = newtext + text[a];
    };
    a += 1;
  };
  a = 0;
  let output = "";
  while (a < newtext.length) {
    output = output + newtext[a];
    if (newtext[a] == '"') {
      par = !par;
    };
    if ((newtext[a] == "{" || newtext[a] == "[") && par == false) {
      indent += 2;
      output = output + "\n"
      i = 0;
      for (i = 0; i < indent; i++) {
        output = output + " ";
      };
    };
    if ((newtext[a] == "}" || newtext[a] == "]") && par == false) {
      indent += -2;
      if (newtext[a+1] == ",") {
        output = output + newtext[a+1] + "\n";
      } else {
        output = output + "\n"
      };
      i = 0;
      for (i = 0; i < indent; i++) {
        output = output + " ";
      };
      i = 0;
      while (newtext[a-i] !== " " && a-i >= 0) {
        i += 1
      };
      output = output.slice(0,(a-i)-2) + output.slice((a - i) + 1, output.length)
    };
    
    if (newtext[a] = "," && newtext[a - 1] !== "}" && newtext[a - 1] !== "]" && par == false) {
      output = output + "\n";
      i = 0;
      for (i = 0; i < indent; i++) {
        output = output + " ";
      };
    };
    a += 1;
  };
  return output
};
