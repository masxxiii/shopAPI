'use strict';
import getRoute from "./getRoute";
import postRoute from "./postRoute";
import updateRoute from "./updateRoute";
import deleteRoute from "./deleteRoute";

export default [
    ...getRoute,
    ...postRoute,
    ...updateRoute,
    ...deleteRoute,
];