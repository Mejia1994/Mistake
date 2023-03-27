import {bindManager, stateManager} from "./state";
import arrayToMap from "./proto/arrayToMap";
import mapToArray from "./proto/mapToArray";

Array.prototype.toMap = arrayToMap;
Map.prototype.toArray = mapToArray;

global.state = window.state = stateManager;
global.bind = window.bind = bindManager;
