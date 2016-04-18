# GDC Legacy Archive v2

With GDC moving into the next 2 years, it would be ideal if `portal-ui` was written with the idea of components from the ground up. React is a great choice, however a number of technologies can provide the same benefit and interoperate with each other. The key areas to cover include:

  - Virtual DOM (React, jsx / hyperscript)
  - JS for styles (react-look, radium)
  - State / Actions (relay / redux)

This project aims to begin such a process.

## Install

    npm install
    npm start

## Separation of concerns:

### `/config`

 - urls
 - ...

### `/components`

This folder contains components that are specific to this project.
Consider refactoring a component to `uikit` if there are shareable traits.

### `/uikit`

Interfaces for style and behavior.

 - no state or lifecycle events
 - use `theme[value] || <defaultValue>` liberally `TODO: context`

### `/theme`

***All style (CSS) should go here***

  - constants

        primary: `rgb(37, 144, 87)`,

  - fragments

        tabBorder: {
          border: `1px solid black`,
          borderRadius: `5px`,
        },

      usage:

        tab: {
          ...theme.tabBorder,
          fontSize: `2rem`,
        },

  - mixins

        margin: ({ dir, val }) => dir
          : { [`margin${dir}`]: val }
          ? { margin: val },

      usage:

        import React, { Children, cloneElement } from 'react'
        import theme from 'theme'
        import look, { StyleSheet } from 'react-look'

        // * + *
        // LobotmizedOwl Selector

        let LobotomizedOwl = ({ children }) =>
          Children.map((children, i) => cloneElement(child, {
            className: i && styles.margin
          }))

        let styles = StyleSheet.create({
          margin: props => theme.margin(...props)
        })

        export default look(LobotomizedOwl)

and then..

        <LabotomizedOwl dir='Left' val='1rem' />



### `/dux` or relay stuff.. actions / side effects

### `/utils`

General purpose pure functions.
