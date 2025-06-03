"use strict";

const frogWeight = prompt("Kiek sveria varlė");
const frogCount = prompt("Kiek varlių norima stebėti?");

const frogTotalWeight = (+frogWeight * +frogCount) / 1000;

if (frogTotalWeight > 5) {
  console.log("Varlių stebėjimui pakanka");
} else {
  console.log("Varlių stebėjimui per mažai");
}
