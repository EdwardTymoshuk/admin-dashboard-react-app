<<<<<<< HEAD
import React from 'react'

const Editor = () => {
    return (
        <div>
            
=======
import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2
        md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Editor" />
            <RichTextEditorComponent>
                <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
            </RichTextEditorComponent>
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
        </div>
    )
}

export default Editor
