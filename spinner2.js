const char = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];
for (let i = 0; i < char.length; i++) {
  let speed = 100 + 200 * i;
  if (i !== char.length - 1) {
    setTimeout(() => {
      process.stdout.write(char[i]);
    }, speed);
  } else {
    setTimeout(() => {
      process.stdout.write(char[i] + "\n");
    }, speed);
  }
}
