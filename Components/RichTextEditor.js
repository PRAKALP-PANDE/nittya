// RichTextEditor.jsx
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'

const MenuBar = ({ editor }) => {
    if (!editor) return null

    return (
        <div className="flex gap-2 border border-gray-300 bg-gray-100 px-3 py-2 rounded-t-md">
            <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'font-bold text-[#2d9155]' : ''}>Bold</button>
            <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'italic text-[#2d9155]' : ''}>Italic</button>
            <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive('underline') ? 'underline text-[#2d9155]' : ''}>Underline</button>
            <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'text-[#2d9155]' : ''}>• Bullet List</button>
        </div>
    )
}

const RichTextEditor = ({ value, onChange }) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: false,
                listItem: false,
            }),
            Underline,
            BulletList,
            ListItem,
        ],
        content: value,
        onUpdate: ({ editor }) => {
            onChange({ target: { name: 'content', value: editor.getHTML() } })
        },
    })

    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} className="border border-gray-300 rounded-b-md p-4 min-h-[160px]" />
        </div>
    )
}

export default RichTextEditor
