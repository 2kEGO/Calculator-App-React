import { useState } from "react";
import React from "react";

export const handleSwitchCount = (state, setState) => {
    if (state >= 3) {
        setState(1);
    } else {
        setState(state + 1);
    }
};


