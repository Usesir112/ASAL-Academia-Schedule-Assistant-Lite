// component/button.config.ts
export function buttonConfig(color: string, type: string) {
  // Same class with every type of button
  let classFill: string =
    "inline-flex items-center font-semibold rounded py-2 px-4 ";

  switch (type) {
    case "outlined":
      classFill +=
        "bg-transparent hover:text-white border hover:border-transparent";

      switch (color) {
        // IT color
        case "it":
          classFill += " text-it hover:bg-it border-it";
          break;

        //DSBA color
        case "dsba":
          classFill += " text-dsba hover:bg-dsba border-dsba";
          break;

        // BIT Color
        case "bit":
          classFill += " text-bit hover:bg-bit border-bit";
          break;

        //Warning Color
        case "warning":
          classFill += " text-warning hover:bg-warning border-warning";
          break;
      }
      break;

    case "solid":
      classFill += `text-white`;
      switch (color) {
        // IT color
        case "it":
          classFill +=
            " bg-it hover:bg-it-50 hover:border hover:border-it hover:text-it";
          break;

        //DSBA color
        case "dsba":
          classFill +=
            " bg-dsba hover:bg-dsba-50 hover:border hover:border-dsba hover:text-dsba";
          break;

        // BIT Color
        case "bit":
          classFill +=
            " bg-bit hover:bg-bit-100 hover:border hover:border-bit hover:text-bit";
              break;
          
        //Warning Color
        case "warning":
          classFill +=
            " bg-warning hover:bg-warning-light hover:border hover:border-warning-dark hover:text-warning-dark";
          break;
      }
      break;
  }
  return classFill;
}
