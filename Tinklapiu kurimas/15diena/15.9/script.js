"use strict";

const tautvydoSausainiai = prompt("Kiek sausainių iškepė Tautvydas?");
const draugaiAtsineseSausainiu = prompt(
  "Keli draugai dar atsinešė po tiek pat sausainių?"
);
const dalyviai = prompt("Kiek žmonių iš viso dalyvavo šventėje?");

const isVisoSausainiu =
  +tautvydoSausainiai + +tautvydoSausainiai * +draugaiAtsineseSausainiu;

const sausainiuDalinimoApskaiciavimas = isVisoSausainiu / +dalyviai;

const sventesDalyviaiGavoSausainiu = Math.trunc(
  sausainiuDalinimoApskaiciavimas
);

const tautvyduiLikoSausainiu =
  isVisoSausainiu - +dalyviai * sventesDalyviaiGavoSausainiu;

console.log(
  "Kiekvienas šventės dalyvis gavo po " +
    sventesDalyviaiGavoSausainiu +
    " sausainius"
);

console.log(
  "Tautvydui papildomai atiteko " + tautvyduiLikoSausainiu + " sausainiai"
);
