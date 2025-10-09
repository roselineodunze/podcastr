// components/ClientThemeProvider.js
'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function ClientThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
