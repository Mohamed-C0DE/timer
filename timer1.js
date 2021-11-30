const args = process.argv.slice(2);

const timer = (num) => {
  if (num === []) {
    return;
  }
  for (const number of args) {
    const el = Number(number);
    if (el > 0 && Number.isInteger(el)) {
      setTimeout(() => {
        process.stdout.write(".");
      }, el);
    }
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, args.slice(-1));
};

timer(args);
