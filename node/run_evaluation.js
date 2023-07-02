const constants = require('../common/constants.js');
const utils =  require('../common/utils.js');
const KNN = require("../common/classifiers/knn.js");
// const featuresFunctions =  require('../common/featuresFunctions.js');

const fs = require('fs');

console.log("running classification.......")

const {samples: trainingSamples} = JSON.parse(
   fs.readFileSync(constants.TRAINING)
);

const k = 50;
const kNN = new KNN(trainingSamples, k);  //duplicate

const {samples: testingSamples} = JSON.parse(
   fs.readFileSync(constants.TESTING)
);

let totalCount = 0;
let correctCount = 0;

for(const sample of testingSamples){
   const {label: predictedLabel} = kNN.predict(sample.point);
   correctCount += predictedLabel === sample.label;
   totalCount++;
}

console.log("Accuracy : " + 
   correctCount+"/"+totalCount+" ("+
   utils.formatPercent(correctCount/totalCount)+
   ")"
);



console.log("generating decision boundary......");

const {createCanvas} = require("canvas");
const canvas = createCanvas(100, 100);
const ctx = canvas.getContext("2d");

// pixel based plot each pixel is used as a feature
//and we color the pixel depending on predicted value

for(let x=0; x<canvas.width; x++){
	for(let y=0; y<canvas.height; y++){
		const point = [
			x/canvas.width,
			1-y/canvas.height,
		]
		
		const {label} = kNN.predict(point);
		const color = utils.styles[label].color;
		
		ctx.fillStyle = color;
		ctx.fillRect(x,y,1,1);  //1 by 1 pixel rect acts as a point
	}
}


const buffer = canvas.toBuffer("image/png");
fs.writeFileSync(constants.DESISION_BOUNDARY, buffer);
console.log("done");































