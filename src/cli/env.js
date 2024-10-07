const parseEnv = () => {
  const rssKeys = [];
  Object.keys(process.env).filter((key) => {
    const keyRss = key.includes('RSS_') ? key : null;
    if (keyRss) rssKeys.push(`${key}=${process.env[key]}`);
  });

  console.log(rssKeys.join('; '));
};

parseEnv();
