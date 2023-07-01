const constants = {};

constants.DATA_DIR ='../data';
constants.RAW_DIR = constants.DATA_DIR+'/raw';
constants.DATASET_DIR = constants.DATA_DIR+ '/dataset';
constants.JSON_DIR    = constants.DATASET_DIR+ '/json';
constants.IMG_DIR     = constants.DATASET_DIR+ '/image';	// only works in node
constants.IMG_DIR2    = "./data/dataset/image"	// only works in browser //bcz i restructured the files later 451
constants.SAMPLES     = constants.DATASET_DIR+ '/samples.json';
constants.FEATURES    = constants.DATASET_DIR+ '/features.json';
constants.JS_OBJECTS  = "../common/js_objects";
constants.SAMPLES_JS  = constants.JS_OBJECTS+ "/samples.js"
constants.FEATURES_JS = constants.JS_OBJECTS+ "/features.js"
constants.MIN_MAX_JS = constants.JS_OBJECTS+ "/minMax.js"


if (typeof module !== 'undefined')
	module.exports = constants;