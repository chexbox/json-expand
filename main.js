function expand(text) {
  let a = 0; //counter for which character you're on
  let newtext = "";
  let par = false;
  let indent = 0;
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
    if (newtext[a] == '"' && newtext[a - 1] !== "\\") {
      par = !par;
    };
    if (newtext[a] == "{" || newtext[a] == "[") {
      indent += 2;
      if (newtext[a+1] == ",") {
        output = output + newtext[a] + newtext[a+1] + "\n";
      } else {
        output = output + newtext[a] + "\n"
      };
      let i;
      for (i = 0; i < indent; i++) {
        output = output + " ";
      };
    };
    if (newtext[a] = "," && newtext[a - 1] !== "}" && newtext[a - 1] !== "]") {
    };
    a += 1;
  };
};
