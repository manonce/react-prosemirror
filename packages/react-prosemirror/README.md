## Installation

`npm install @aeaton/react-prosemirror --save`

or

`yarn add @aeaton/react-prosemirror`

## Demo

[View demo](http://git.macropus.org/react-prosemirror/)

## Usage

This example imports configuration from [@aeaton/react-prosemirror-config-default](https://www.npmjs.com/package/@aeaton/react-prosemirror-config-default).

```js
import React from 'react'
import { HtmlEditor } from '@aeaton/react-prosemirror'
import { options } from '@aeaton/react-prosemirror-config-default'

const CustomEditor = ({ value, onChange }) => (
  <HtmlEditor
    options={options}
    value={value}
    onChange={onChange}
  />
)

export default CustomEditor
```

Use a `render` prop to add the menu bar:

```js
import React from 'react'
import { HtmlEditor, MenuBar } from '@aeaton/react-prosemirror'
import { options, menu } from '@aeaton/react-prosemirror-config-default'

const CustomEditor = ({ value, onChange }) => (
  <HtmlEditor
    options={options}
    value={value}
    onChange={onChange}
    render={({ editor, state, dispatch }) => (
      <div>
        <MenuBar menu={menu} state={state} dispatch={dispatch}/>
        {editor}
      </div>
    )}
  />
)

export default CustomEditor
```
