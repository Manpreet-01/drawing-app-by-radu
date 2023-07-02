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