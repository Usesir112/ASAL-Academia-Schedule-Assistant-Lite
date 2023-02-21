export function colorSelect(color: string) {
  let style = "text-disable text-[28px] mx-2.5";
  switch (color) {
    case "it":
      style += " hover:text-it";
      break;
    case "dsba":
      style += " hover:text-dsba";
      break;
    case "bit":
      style += " hover:text-bit";
      break;
    case "ai":
      style += " hover:text-ai";
      break;
  }
  return style;
}
