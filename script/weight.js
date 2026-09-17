const gravityRatio = {
        sun: 27.01,
        mercury: 0.378,
        venus: 0.907,
        earth: 1,
        moon: 0.1657,
        mars: 0.377,
        jupiter: 2.36,
        saturn: 0.916,
        uranus: 0.889,
        neptune: 1.12
};

const planetWeight = function(earthWeight, body){
    if (earthWeight < 0) return "Imposible to calculate";
    const ratio = gravityRatio[body.toLowerCase()];
    if (ratio === undefined) throw new Error(`Unknown body: ${body}`);

    return earthWeight * ratio;
};