"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps={
    children: React.ReactNode;
}

type ThemeContextType ={
    theme:
}