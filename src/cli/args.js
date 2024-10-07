const parseArgs = () => {
  const argsArr = [];
  for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i].startsWith('--')) {
      argsArr.push(
        `${process.argv[i].replace('--', '')} is ${process.argv[i + 1]}`
      );
      i++;
    }
  }

  console.log(argsArr.join(', '));
};

parseArgs();
