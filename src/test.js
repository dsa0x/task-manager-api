const a = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(20);
      res(1);
    }, 2000);
    console.log(5);
  });
};

const d = async () => {
  console.log(11);
  return 12;
};

const b = async () => {
  console.log(10);
  //   const e = d();
  //   console.log(e);
  const c = await a();
  console.log(c);
  console.log(13);
};

b();
