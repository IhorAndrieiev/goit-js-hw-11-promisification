const delay = ms => {
  //co Твой код
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
    return promise;
};
const logger = time => {
    const titleLogger = `<h1>Resolved after ${time}ms</h1>`;
   document.body.insertAdjacentHTML("beforeend", titleLogger)
    console.log(`Resolved after ${time}ms`);
}

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms