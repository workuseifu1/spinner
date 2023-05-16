const char = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];
for (let i = 0; i < char.length; i++) {
  let speed = 100 + 200 * i;  
  (i !== char.length -1) ? setTimeout(() => {
    process.stdout.write(char[i]);
  }, speed) : setTimeout(() => {
    process.stdout.write(char[i] + "\n");
  }, speed);  
};
