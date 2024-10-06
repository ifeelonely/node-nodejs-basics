import { Transform } from 'node:stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(`${chunk.reverse()}\n`);
      callback();
    },
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
