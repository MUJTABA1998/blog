import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    EditorState.createEmpty();
  });

  console.log(editorState);

  return (
    <Editor
      editorState={editorState}
      placeholder="Write your blog content here"
      toolbarClassName="bg-gray-800 w-[700px] h-auto"
      wrapperClassName="border border-gray-400 w-[700px]"
      editorClassName="w-[700px] h-[600px] border border-gray-300 pl-[20px] font-secondary"
      onEditorStateChange={setEditorState}
    />
  );
};

export default RichTextEditor;
