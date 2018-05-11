function expand(text) {
  let a = 0; //counter for which character you're on
  let output;
  let par = false;
  let indent = 0;
  while (a < text.length) {
    if (text[a] !== " ") {
      output = output + text[a];
      if (text[a] == '"' && text[a - 1] !== "\\") {
        par = !par;
      };
      if (text[a] == "{" || text[a] == "") {
        indent += 2;
      };
    };
    a += 1;
  };
};
