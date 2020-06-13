const worker = new Worker('./worker.js');
const competitors = [
    new Worker('./competitor.js'),
    new Worker('./competitor.js'),
];
const sab = new SharedArrayBuffer(1);
worker.postMessage(sab);
competitors.forEach(w => {
    w.postMessage(sab);
});

worker.onmessage = function(e) {
    const { done } = e.data;
    if (done) {
        competitors.forEach(w => {
            w.postMessage({ done });
        });
    }
}
