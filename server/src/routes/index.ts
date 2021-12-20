'use strict';
import getRoute from "./getRoute";
import postRoute from "./postRoute";
import updateRoute from "./updateRoute";

export default [
    ...getRoute,
    ...postRoute,
    ...updateRoute,
];